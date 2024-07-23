from flask import Flask, request, jsonify
from flask_cors import CORS
from sentence_transformers import SentenceTransformer
from pinecone import Pinecone

app = Flask(__name__)
CORS(app) 

pc = Pinecone(api_key="a79d5f47-9065-4a62-81fd-34b335170e2a")
index_name = "locobo"
index = pc.Index(index_name)

model = SentenceTransformer('all-MiniLM-L6-v2')

@app.route('/ask', methods=['POST'])
def ask():
    data = request.json
    user_query = data.get('query')
    print(f"User Query: {user_query}")

    if not user_query:
        return jsonify({'answer': "No query provided."}), 400

    query_vector = model.encode(user_query).tolist()

    try:
        response = index.query(
            vector=query_vector,
            top_k=1,
            include_metadata=True
        )
    except Exception as e:
        print(f"Error during Pinecone query: {e}")
        return jsonify({'answer': "Error processing query."}), 500

    score_threshold = 0.45

    if response['matches'] and response['matches'][0]['score'] >= score_threshold:
        top_match = response['matches'][0] 
        print(f"Top Match: {top_match}")
        answer = top_match['metadata']['answer']
        print(f"Answer: {answer}")
        return jsonify({'answer': answer}), 200
    else:
        answer = "Sorry, I do not know what you're asking about. Please <a href='mailto:rakshitamanocha@gmail.com'>email your query</a>."

    return jsonify({'answer': answer}), 200

if __name__ == '__main__':
    app.run(port=5000, debug=True)  

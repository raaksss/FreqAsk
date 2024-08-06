
const faqCache = new Map();

const getFAQsFromCache = () => {
  return Array.from(faqCache.values());
};

const getFAQByIdFromCache = (id) => {
  return faqCache.get(id);
};

const setFAQInCache = (faq) => {
  faqCache.set(faq._id.toString(), faq);
};

const removeFAQFromCache = (id) => {
  faqCache.delete(id);
};

const clearCache = () => {
  faqCache.clear();
};

function printCache() {
    console.log("Cache contents:");
    faqCache.forEach((value, key) => {
      console.log(`Key: ${key}, Value:`, value);
    });
  }

module.exports = {
  getFAQsFromCache,
  getFAQByIdFromCache,
  setFAQInCache,
  removeFAQFromCache,
  clearCache,
  printCache
};

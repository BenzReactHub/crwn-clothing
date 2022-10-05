import { createSelector } from "reselect";

// 當你第一次輸入3, 6得到的結果是9之後，第二輸入相同的值，為什麼還要浪費額外資源來重新計算你之前已經計算過的東西呢？
// 所以我們要使用reselect
// const add = (a, b) => a + b;
// add(3, 6); // 9

// 這一個是一定會被執行的
const selectCategoryReducer = (state) => state.categories;

// first argument is input selectors, and the second is going to be the output selector
// The only time where this will run is if this category slice object that we get back from this selector is different
// 如果這個類的輸入值是不同的，只有這個時候這個selector才會執行
export const selectCategories = createSelector(
  [selectCategoryReducer],
  (categoriesSlice) => categoriesSlice.categories
);

// memories selector
// categories 如果沒有改變的話，就不要另外執行了，直接返回之前的值就好了
// 但至少會執行第一次
export const selectCategoriesMap = createSelector(
  [selectCategories],
  (categories) =>
    categories.reduce((acc, category) => {
      const { title, items } = category;
      acc[title.toLowerCase()] = items;
      return acc;
    }, {})
);

// memories selector
export const selectCategoriesIsLoading = createSelector(
  [selectCategoryReducer],
  (categoreiesSlice) => categoreiesSlice.isLoading
)
const countCategoryViewers = () => {
  let sumViewers = 0;
  const nodes = document.querySelectorAll("div.tw-absolute.tw-bottom-0.tw-left-0.tw-mg-x-05.tw-mg-y-05");
  const scrollArea = document.querySelectorAll("div.tw-flex.tw-flex-column.tw-flex-nowrap.tw-full-height div main")[0].children[0].children[2];
  let inputSuccessful = scrollToLoad(scrollArea);
  if (inputSuccessful.status === true) {
    setTimeout(e => {
      nodes.forEach(e => {
        sumViewers += Number(e.children[0].children[0].innerText.split(" ")[0].replace(",",""))
      });
      console.log(`We counted ${sumViewers} total viewers`);
    }, (750 * inputSuccessful.returned) + 5000);
  } else {
    console.log(inputSuccessful.returned);
  }
};

const scrollToLoad = (scrollElement) => {
  let numberOfScrollAttempts = window.prompt("How many times should we try to scroll down?");
  if (
    typeof numberOfScrollAttempts === "number" || 
    (typeof Number(numberOfScrollAttempts.replace(",","")) === "number" && isNaN(Number(numberOfScrollAttempts.replace(",",""))) !== true)
  ) {
    for (let i = 1; i <= numberOfScrollAttempts; i += 1) {
      setTimeout(() => {
        console.log('scroll #', i);
        scrollElement.scrollTo(0, 1000000);
      }, 750 * i);
    };
    return {status: true, returned: numberOfScrollAttempts};
  } else {
    window.alert("Invalid entry, try again with a number.");
    return {status: false, returned: `Could not scroll to load more data. Invalid entry for number of scroll attempts. Input was ${numberOfScrollAttempts}`};
  }
}



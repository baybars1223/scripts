const countCategoryViewers = () => {
  let sumViewers = 0;
  const nodes = document.querySelectorAll("div.tw-absolute.tw-bottom-0.tw-left-0.tw-mg-x-05.tw-mg-y-05");
  const scrollArea = document.querySelectorAll("div.tw-flex.tw-flex-column.tw-flex-nowrap.tw-full-height div main")[0].children[0].children[2];
  const numberOfScrollAttempts = window.prompt("How many times should we try to scroll down?");
  for (let i = 1; i <= numberOfScrollAttempts; i += 1) {
    setTimeout(e => {
      console.log('scroll #', i);
      scrollArea.scrollTo(0, 1000000);
    }, 750 * i);
  };
  setTimeout(e => {
    nodes.forEach(e => {
      sumViewers += Number(e.children[0].children[0].innerText.split(" ")[0].replace(",",""))
    });
    console.log(`We counted ${sumViewers} total viewers`);
  }, (750 * numberOfScrollAttempts) + 5000);
};




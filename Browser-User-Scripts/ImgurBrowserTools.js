window.confirm = () => true;
let commentsLength;
let comments;

const gatherComments = () => {
  comments = document.querySelectorAll('.comment-item');
};

const deleteComments = (minimumVotes) => {
  gatherComments();
  comments.forEach((e,i)=> {
    let votes = e.children[1].children[0].children[0].children[0].children[0].children[1].innerHTML.split(" ")[0];
    let deleteButton;
    // Delete button is currently 3 or 4 in children array at parent level (somewhere below ".options")
    if (e.children[1].children[0].children[0].children[0].children[0].children[3].children[2].children[0].children[4]) {
      deleteButton = e.children[1].children[0].children[0].children[0].children[0].children[3].children[2].children[0].children[4];
    } else {
      console.log(e.children[1].children[0].children[0].children[0].children[0].children[3].children[2].children[0].children);
      deleteButton = e.children[1].children[0].children[0].children[0].children[0].children[3].children[2].children[0].children[3];
    }
    if (votes < minimumVotes) {
      deleteButton.click();
    }
  });
}

const removeComments = (minimumVotes) => {
  gatherComments();
  comments.forEach((e,i)=> {
    let votes = e.children[1].children[0].children[0].children[0].children[0].children[1].innerHTML.split(" ")[0];
    if (votes > minimumVotes) {
      e.parentNode.removeChild(e);
    }
  });
}

const scroll = () => {
  for (let i = 0; i < 20; i++) {
    setTimeout(()=>{
      window.scrollTo(window.scrollX, window.scrollY - 1000000);
      window.scrollTo(window.scrollX, window.scrollY + 1000000);
    }, i * 500)
  }
}

const numComments = () => {
  commentsLength = document.querySelectorAll('.comment-item').length;
  console.log(commentsLength);
}
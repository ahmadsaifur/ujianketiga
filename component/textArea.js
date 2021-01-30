import Component from "./Component";

class textArea extends Component {
    let txtHTML = `<div class="form-floating">
    <textarea class="form-control" placeholder="Leave a comment here" id="floatingTextarea"></textarea>
    <label for="floatingTextarea">Comments</label>
  </div>`;
  return txtHTML;
}

export default textArea;

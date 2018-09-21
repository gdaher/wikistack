const html = require("html-template-tag");
const layout = require("./layout");

module.exports = () => layout(html`
  <h3>Add a Page</h3>
  <hr>
  <form method="POST" action="/wiki/">

  <div class="form-group">
    <label for="name" class="col-sm-2 control-label">Author Name:</label>
    <div class="col-sm-10"><input id="name" name="name" type="text" class="form-control"/></div>
    <br>
    <label for="email" class="col-sm-2 control-label">Email:</label>
    <div class="col-sm-10"><input id="email" name="email" type="text" class="form-control"/></div>

    <br>

      <label for="title" class="col-sm-2 control-label">Page Title:</label>
      <div class="col-sm-10">
        <input id="title" name="title" type="text" class="form-control"/>
      </div>
    </div>
    <br>
    <label for="content" class="col-sm-2 control-label">Article Content:</label>
    <div><input id="content" name="content" type="text" class="form-control"/></div>
  <br>
    <div>
    <fieldset>
        <legend>Select open or closed</legend>

        <div>
            <input type="radio" id="open"
                   name="status" value="open" checked />
            <label for="open">Open</label>
        </div>

        <div>
            <input type="radio" id="closed"
                   name="status" value="closed" />
            <label for="closed">Closed</label>
        </div>

    </fieldset>
    </div>

    <div class="col-sm-offset-2 col-sm-10">
      <button type="submit" class="btn btn-primary">submit</button>
    </div>

  </form>
`);

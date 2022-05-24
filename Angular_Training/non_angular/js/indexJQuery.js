$(document).ready(function () {
  // Populate table with JSON
  $.getJSON("../assets/Data.json", (data) => {
    populateTable(data, "table1Body");
  }).fail(() => {
    console.log("An error has ocurred");
  });

  $.getJSON("https://dummyjson.com/users", (data) => {
    let items = [];
    let line = "";
    let maxNum = 15;

    for (let i = 0; i < maxNum; i++) {
      line += `<td class='table-item'>${data.users[i].firstName}</td>`;
      line += `<td class='table-item'>${data.users[i].lastName}</td>`;
      line += `<td class='table-item'>${data.users[i].age}</td>`;
      line += `<td class='table-item'>${data.users[i].username}</td>`;
      line += `<td class='table-item'>${data.users[i].birthDate}</td>`;

      let $tr = $("<tr>").attr({ class: "table-row-item" }).append(line);
      items.push($tr);
      line = "";
    }

    $("#table2Body").append(items);
  }).fail(() => {
    console.log("Failed to fetch users api");
  });

  const populateTable = (data, tableBodyId) => {
    let items = [];
    let line;
    $.each(data, (_index, obj) => {
      line = $.map(obj, (value, key) => {
        return `<td class='table-item-${key}'>${value}</td>`;
      });

      let $tr = $("<tr>").attr({ class: "table-row-item" }).append(line);
      items.push($tr);
    });

    $("#" + tableBodyId).append(items);
  };

  // Table sort from:
  // https://orangeable.com/javascript/jquery-table-sorting#:~:text=%20jQuery%20Table%20Sorting%3A%20Sort%20Data%20on%20Header,function%20call%20in%20our%20click%20event...%20More%20
  $(document).on("click", "table thead tr th:not(.no-sort)", function () {
    var table = $(this).parents("table");
    var rows = $(this)
      .parents("table")
      .find("tbody tr")
      .toArray()
      .sort(TableComparer($(this).index()));
    var dir = $(this).hasClass("sort-asc") ? "desc" : "asc";

    if (dir == "desc") {
      rows = rows.reverse();
    }

    for (var i = 0; i < rows.length; i++) {
      table.append(rows[i]);
    }

    table.find("thead tr th").removeClass("sort-asc").removeClass("sort-desc");
    $(this)
      .removeClass("sort-asc")
      .removeClass("sort-desc")
      .addClass("sort-" + dir);
  });

  function TableComparer(index) {
    return function (a, b) {
      var val_a = TableCellValue(a, index);
      var val_b = TableCellValue(b, index);
      var result =
        $.isNumeric(val_a) && $.isNumeric(val_b)
          ? val_a - val_b
          : val_a.toString().localeCompare(val_b);

      return result;
    };
  }

  function TableCellValue(row, index) {
    return $(row).children("td").eq(index).text();
  }

  //Table pagination
  //
  $("table").tablePagination({
    perPage: 10,
    initPage: 1,
    position: "bottom",
    showAllButton: false,
    paginationClass: "tablePagination",
  });
});

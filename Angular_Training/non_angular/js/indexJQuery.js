$(document).ready(function () {
  const MAX_PER_PAGE = 10;

  // Populate table with JSON
  const populateTable1 = (offset = 0) => {
    $.getJSON("../assets/Data.json", (data) => {
      populateTable(data.slice(offset, offset + MAX_PER_PAGE), "table1Body");
    }).fail(() => {
      console.log("An error has ocurred");
    });
  };

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

    $("#" + tableBodyId).html(items);
  };

  const populateTable2 = (offset = 0) => {
    $.getJSON(
      `https://dummyjson.com/users?skip=${offset}&limit=${MAX_PER_PAGE}`,
      (data) => {
        let items = [];
        let line = "";

        $.each(data.users, (_i, obj) => {
          line += `<td class='table-item'>${obj.firstName}</td>`;
          line += `<td class='table-item'>${obj.lastName}</td>`;
          line += `<td class='table-item'>${obj.age}</td>`;
          line += `<td class='table-item'>${obj.username}</td>`;
          line += `<td class='table-item'>${obj.birthDate}</td>`;

          let $tr = $("<tr>").attr({ class: "table-row-item" }).append(line);
          items.push($tr);
          line = "";
        });

        $("#table2Body").html(items);
      }
    ).fail(() => {
      console.log("Failed to fetch users api");
    });
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
  populateTable1();
  populateTable2();

  $("#table1Pagination li").click((e) => {
    e.preventDefault();
    $("#table1Pagination li").removeClass("active");
    $(e.target).parent().addClass("active");
    populateTable1((e.target.text - 1) * MAX_PER_PAGE);
  });

  $("#table2Pagination li").click((e) => {
    e.preventDefault();
    $("#table2Pagination li").removeClass("active");
    $(e.target).parent().addClass("active");
    populateTable2((e.target.text - 1) * MAX_PER_PAGE);
  });
});

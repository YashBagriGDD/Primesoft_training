$(document).ready(function () {
  //   $("#table1").on("click", function () {
  //     $("#table1").DataTable();
  //   });

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
});

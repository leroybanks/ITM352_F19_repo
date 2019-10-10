'<script>'

'<body>'

var item1 = 'Gillette Sensor 3 Razor';
     var quantity1 = 2;
     var price1 = 1.23;

var item2 = 'Barbasol Shaving Cream';
     var quantity2 = 1;
     var price2 = 2.64;

var item3= 'Nautica Cologne';
     var quantity3 = 1;
     var price3 = 6.17;

var item4 = 'Rubbing Alcohol';
     var quantity4 = 3;
     var price4 = 12;

var item5 = 'Colegate Classic Toothbrush';
     var quantity5 = 20;
     var price5 = 10;

// Compute extended prices
var extended_price1 = price1 * quantity1;
var extended_price2 = price2 * quantity2;
var extended_price3 = price3 * quantity3;
var extended_price4 = price4 * quantity4;
var extended_price5 = price5 * quantity5;

// Compute sub-total
var subtotal = extended_price1 + extended_price2 + extended_price3 + extended_price4 + extended_price5;

var taxrate = 0.0575;
var taxpercent = "5.75" + "%";
var salestax = (subtotal * taxrate).toFixed(2);


var grandtotal = (Number(subtotal) + Number(salestax)).toFixed(2)

document.write("Item: " + item1 + "<br>" + "Quantity: " + quantity1 + "<br>" + "Price: $" + price1 + "<br>" + "Extended Price: $" + extended_price1 + "<br>" + "<br>");

document.write("Item: " + item2 + "<br>" + "Quantity: " + quantity2 + "<br>" + "Price: $" + price2 + "<br>" + "Extended Price: $" + extended_price2 + "<br>" + "<br>");

document.write("Item: " + item3 + "<br>" + "Quantity: " + quantity3 + "<br>" + "Price: $" + price3 + "<br>" + "Extended Price: $" + extended_price3 + "<br>" + "<br>");

document.write("Item: " + item4 + "<br>" + "Quantity: " + quantity4 + "<br>" + "Price: $" + price4 + "<br>" + "Extended Price: $" + extended_price4 + "<br>" + "<br>");

document.write("Item: " + item5 + "<br>" + "Quantity: " + quantity5 + "<br>" + "Price: $" + price5 + "<br>" + "Extended Price: $" + extended_price5 + "<br>" + "<br>");

document.write("Subtotal: " + subtotal + "<br>" + "<br>");

document.write("Sales Tax: " + salestax + "<br>" + "<br>");

document.write("Grand Total: " + `<strong> ${(Number(subtotal) + Number(salestax)).toFixed(2)} </strong>`);

document.write("<br>" + "<br>")

document.write(
"<div>" + 
    "<table border ='2'>"
        <tbody> +
            "<tr>" +
                "<th style='text-align: center' width='43%'>" + "Item" + "</th>" +
                "<th style='text-align: center' width='11%'>" + "Quantity" + "</th>" +
                "<th style='text-align: center' width='13%'>" + "Price" + "</th>" +
                "<th style='text-align: center' width='54%'>" + "Extended Price" + "</th>" +
            "</tr>" +
            "</th>" +
            "</tr>" +
            "<tr>"  +
                "<td width='43%'>" + item1 + "</td>" +
                "<td align='center' width='43%'>" + quantity1 + "</td>" +
                "<td width='43%'>" + price1 + "</td>" +
                "<td width='43%'>" + extended_price1 + "</td>" +
            "</tr>" +
            "<tr>" +
            "<td width='43%'>" + item1 + "</td>" +
                "<td align='center' width='43%'>" + quantity1 + "</td>" +
                "<td width='43%'>" + price1 + "</td>" +
                "<td width='43%'>" + extended_price1 + "</td>" +
            "</tr>" + 
        "<tr>" +
        "<td width='43%'>" + item1 + "</td>" +
                "<td align='center' width='43%'>" + quantity1 + "</td>" +
                "<td width='43%'>" + price1 + "</td>" +
                "<td width='43%'>" + extended_price1 + "</td>" +
            "</tr>" +  
        "<tr>" +
        "<td width='43%'>" + item1 + "</td>" +
                "<td align='center' width='43%'>" + quantity1 + "</td>" +
                "<td width='43%'>" + price1 + "</td>" +
                "<td width='43%'>" + extended_price1 + "</td>" +
            "</tr>" +   
        "<tr>" +
        "<td width='43%'>" + item1 + "</td>" +
                "<td align='center' width='43%'>" + quantity1 + "</td>" +
                "<td width='43%'>" + price1 + "</td>" +
                "<td width='43%'>" + extended_price1 + "</td>" +
            "</tr>" +  
        "<tr>" +
                "<td colspan='4' width='100%'" + "&nbsp;" + "</td>" +
            "</tr>" +
              "<tr>" +
                "<td style= 'text-align: center; colspan=3'" + "width=67%" + "Sub-total" + "</td>" +
               "<td width= '54%'>" + subtotal + "</td>" +
            "</tr>" +
            "<tr>" +
              "<td style= 'text-align: center; colspan=3'" + "width=67%" + "</tr>" + "<span style=font-family; arial;" + "Tax @" + taxpercent + "</span>" + "</td>" +
              "<td width='54%'>" + salestax + "</td>" +
            "</tr>" +
            "<tr>" +
              "<td style= 'text-align: center; colspan=3'" + "width=67%" + "<strong>" + "Grand Total" + "</strong>" + "</td>" +
              "<td width='54%'>" + "<strong>" + "Grand Total" + "</strong>" + "</td>" +
            "</tr>" +
        '</tbody>' +
    "table>" +
"</div>");

'</body>'

'</script>'

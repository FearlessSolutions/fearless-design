<h2> Standard Markdown Table </h2>

| Column 1 Header | Column 2 Header | Column 3 Header |
| --------------- | --------------- | --------------- |
| Row 1, Column 1 | Row 1, Column 2 | Row 1, Column 3 |
| Row 2, Column 1 | Row 2, Column 2 | Row 2, Column 3 |
| Row 3, Column 1 | Row 3, Column 2 | Row 3, Column 3 |
| Row 4, Column 1 | Row 4, Column 2 | Row 4, Column 3 |
| Row 5, Column 1 | Row 5, Column 2 | Row 5, Column 3 |
| Row 6, Column 1 | Row 6, Column 2 | Row 6, Column 3 |


<h2> Tables Cannot Automatically Add or Subtract for you in Github Markdown </h2>


GitHub Markdown doesn't support formulas or calculations within tables.



However, there is a workaround that you can use to display the calculated results in the table. You can use a script or tool to calculate the results, and then include the output of the script or tool in the table.


For example, you can use a tool like Google Sheets or Excel to calculate the results and then export the table as a CSV file. You can then copy the CSV file's contents and paste them into your GitHub Markdown file.


| Event Name | Date      | Number of Participants |
| ---------- | ----------| -----------------------|
| Event A    | 2023-05-01| 25                     |
| Event B    | 2023-05-15| 42                     |
| Event C    | 2023-06-01| 18                     |
| Total      |           | 85                     |


In this example (viewable in editor) the total number of participants is manually calculated and displayed in the last row of the table. You can update this number as needed when new participants sign up for the event.


<h2> Styling Does not Work in Github Markdown</h2>
Even if you write it up in HTML



<table style="background-color: #e6ccff;">
  <thead>
    <tr>
      <th style="background-color: #b366ff;">Column 1 Header</th>
      <th style="background-color: #b366ff;">Column 2 Header</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Row 1 Column 1</td>
      <td>Row 1 Column 2</td>
    </tr>
    <tr>
      <td>Row 2 Column 1</td>
      <td>Row 2 Column 2</td>
    </tr>
  </tbody>
</table>


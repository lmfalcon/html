// 新增数据
function addRow(){
    var table = document.getElementById("table")
    // 获取插入的位置
    var length = table.rows.length
    // console.log(length)
    // 插入行节点
    var new_row = table.insertRow(length)
    console.log(new_row)
    // new_row.innerHTML = '12345453'
    // 插入列节点对象
    var name = new_row.insertCell(0)
    var phone = new_row.insertCell(1)
    var operation = new_row.insertCell(2)
    // 修改节点文本内容
    name.innerHTML = "liilili"
    phone.innerHTML = "28939247"
    operation.innerHTML = "<button onclick='EditRow(this)'>编辑</button><button onclick='DeleteRow(this)'>删除</button>"
    console.log(new_row)
}   
// 删除数据
function DeleteRow(button){
    // var table = document.getElementById("table")
        // console.log(button)
    var row = button.parentNode.parentNode
    row.parentNode.removeChild(row)
    
}
// 编辑数据
function EditRow(button){
    // console.log(button)
    var row = button.parentNode.parentNode
    var name = row.cells[0]
    var phone = row.cells[1]
    var input_name = prompt("请输入姓名：")
    var input_phone = prompt("请输入电话：")
    name.innerHTML =input_name
    phone.innerHTML = input_phone
}
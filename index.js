let Submit = document.getElementById('submit');
let Txt = document.getElementById('area');
let body = document.getElementsByTagName('body');

Submit.onclick = function () {
    if (Txt.value !== '') {
        //获取提交按钮，依次添加节点
        let divNote = document.createElement('div');
        divNote.setAttribute('class', 'note');
        divNote.setAttribute('id', 'note');

        let topLeft = document.createElement('div');
        topLeft.setAttribute('class', 'top-left');
        topLeft.setAttribute('id', 'top-left');
        topLeft.innerHTML = 'bbb';

        let topRight = document.createElement('div');
        topRight.setAttribute('class', 'top-right');
        topRight.setAttribute('id', 'top-right');
        topRight.setAttribute('onclick', 'change()');
        topRight.innerHTML = 'X';

        topLeft.appendChild(topRight);
        divNote.appendChild(topLeft);

        let bottom = document.createElement('div');
        bottom.setAttribute('class', 'bottom');
        bottom.innerHTML = Txt.value;

        divNote.appendChild(bottom);

        body[0].appendChild(divNote);
console.log(body[0]);
        Txt.value = ' ';
    }
    else
        alert('请输入有效的笔记呦');
};

function change() {
    let xxx = document.getElementById('top-right');
    xxx.parentNode.parentNode.parentNode.removeChild(xxx.parentNode.parentNode);
}

//事件委托的方法一定要会
// let deleteX1 = document.getElementById('note');
// deleteX1.onclick = function (e) {
//     // console.log('222');
//     var target = e.target;
//     if (target.id.toLowerCase() === 'top-right'){
//         // console.log(target);
//         // console.log('111');
//         target.parentNode.parentNode.parentNode.removeChild(target.parentNode.parentNode);
//     }
// };
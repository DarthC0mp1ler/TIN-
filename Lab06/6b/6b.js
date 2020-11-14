/*
Write a JS function that will add a paragraph of text to
 the page after 5 seconds from opening the page
 */
function displayText() {
    var comment = ("馬鹿みたい 子供なのね\n" +
        "夢を追って傷ついて\n" +
        "嘘が下手なくせに 笑えない笑顔みせた\n" +
        "\n" +
        "I love youも ろくに言わない\n" +
        "口下手でほんまに不器用\n" +
        "なのになのにどうして サヨナラは言えたの\n" +
        "\n" +
        "だめだね だめよ だめなのよ\n" +
        "あんたが 好きで好きすぎて\n" +
        "どれだけ 強いお酒でも\n" +
        "歪まない思い出が 馬鹿みたい").split("\n");
    for(let i = 0; i < comment.length;  i++)
    {
        if(comment[i].length > 0) {
            var newParagraph = document.createElement('p');
            newParagraph.textContent = comment[i];
            document.getElementById("update").appendChild(newParagraph);
        }else {
            document.getElementById("update").appendChild(
                document.createElement('br')
            );
        }
    }
}


window.onload = function(){
    setTimeout(displayText,5000);
};
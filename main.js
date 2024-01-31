/**
 * for fix "mixed content" bug
 * @author Asanatsa
 */


(function () {

    let callback = function () {
        let imgEle = document.getElementsByTagName("img");
        imgEle.forEach(e => {
            if (e.src.search(/^http:\/\//i) !== -1){
                e.src = e.src.replace("http://", "https://");
            }
            if (typeof e.srcset === "string" && e.srcset.search(/http:\/\//i) !== -1) {
                e.srcset = e.srcset.replace("http://", "https://");
                console.log(e)
            }
        });
    }

    document.body.addEventListener("DOMNodeInserted", callback);
    document.body.addEventListener("DOMSubtreeModified", callback);
})();
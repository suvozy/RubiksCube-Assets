var ch_mmhtml = {"mobilehtml":"","pixelhtml":"","snurl":"","js":"","hover":null,"output":"<!DOCTYPE html PUBLIC \"-//W3C//DTD XHTML 1.0 Strict//EN\" \"http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd\">\n<html>\n    <head>\n        <title>Chitika Ads v2 500x250</title>\n        <scr"+"ipt"+" type=\"text/javascr"+"ipt"+"\">\n            function append_func(o,f) {\n                return function(e) {\n                    if(typeof(o) == \"function\") { o(e); }\n                    return a(e);\n                }\n            }\n            function toggleSearch() {\n                var sBlock = document.getElementById('searchBlock');\n                if (sBlock.style.visibility == \"hidden\") {\n                    sBlock.style.visibility = \"visible\";\n                } else {\n                    sBlock.style.visibility = \"hidden\";\n                }\n            }\n\n        </scr"+"ipt"+">\n        <style type=\"text/css\">\n* {\n    padding: 0;\n    margin: 0px;\n}\n\nstrong, b, span {\n    clear: left;\n    display: inline;\n    float: none;\n}\n\nbody {\n    border: 1px solid #FFFFFF;\n    height: 238px;\n    padding: 5px;\n    width: 488px;\n    background-color: #FFFFFF;\n    font-family: Arial, Helvetica, sans-serif;\n    font-size: 12px;\n}\n\n#query {\n    color: #000;\n    font-family: Arial, Helvetica, sans-serif;\n    font-size: 14px;\n    height: 16.8px;\n    font-weight: normal;\n    text-decoration: none;\n    white-space: nowrap;\n    overflow: hidden;\n}\n\n#query strong, #query b, #query span {\n    color: inherit;\n    background-color: #FFFF33;\n    font-weight: bold;\n}\n\nul li {\n    height: 58.8px;\n    list-style: none;\n    margin-bottom: 12.1333333333333px;\n}\nul li:hover {\n    background-color: transparent;\n}\nul li div.details {\n    margin: 0 0 0 60px;\n}\n\nimg.thumbnail {\n    border: none;\n    height: 50px;\n    padding-left: 5px;\n    padding-right: 5px;\n    width: 50px;\n}\nimg.trk {\n    display: none !important;\n}\n\nul li .resThumb {\n    background-position: center center !important;\n    height: 50px !important;\n    float: left;\n    margin: 2px 0 0 5px;\n    width: 50px !important;\n}\nul li .resThumb img {\n    border: 0 !important;\n    height: 50px !important;\n    width: 50px !important;\n}\n\n.resTitle, .resDesc, .resDomain {\n    overflow: hidden;\n    text-overflow: elipsis;\n    text-overflow-mode:ellipsis;\n}\n\n.resTitle, .resTitle a {\n    color: #0000CC;\n    font-size: 14px;\n    font-weight: normal;\n    text-decoration: underline;\n    height: 16.8px;\n    font-family: Arial, Helvetica, sans-serif;\n}\n.resTitle a:hover {\n    background-color: transparent;\n    color: #00c;\n    text-decoration: underline;\n    font-style: normal;\n}\n\n.resDesc, .resDesc a {\n    color: #000000;\n    height: 28.8px;\n    font-weight: normal;\n    line-height: 14.4px;\n    text-decoration: none;\n}\n.resDesc a:hover {\n    background-color: transparent;\n    color: #00c;\n    text-decoration: none;\n    font-style: normal;\n}\n\n.resDomain, .resDomain a  {\n    color: #0000CC;\n    font-size: 11px;\n    height: 13.2px;\n    line-height: 13.2px;\n    font-weight: normal;\n    text-decoration: none;\n}\n.resDomain a:hover {\n    background-color: transparent;\n    color: #00c;\n    text-decoration: none;\n    font-style: normal;\n}\n\n#more {\n    color: #999;\n    font-size: 10px;\n    line-height: 11px;\n    position: absolute;\n    text-decoration: none;\n    bottom: 2px;\n    right: 22px;\n}\n\n#more:hover {\n    color: #333;\n}\n#ads li {\n    position: relative; \n    zoom: 1;\n}\n#ads li .phone {\n    float: none !important;\n    position: absolute;\n    height: 18px;\n    top: 3px;\n    right: 3px;\n    zoom: 1;\n}\n#ads li .phone a, #ads li .phone a img {\n    float: none !important;\n    border: none !important;\n    height: 18px !important;\n    position: relative;\n    zoom: 1;\n}\n\n#searchLink {\n    cursor: pointer;\n    height: 16px;\n    position: absolute;\n    width: 16px;\n    bottom: 2px;\n    right: 2px;\n}\n\n#searchBlock {\n    background-color: #fff;\n    border: 3px solid #CCC;\n    clear: left;\n    display: hidden;\n    float: none;\n    height: 100px;\n    left: 147px;\n    position: absolute;\n    top: 72px;\n    width: 200px;\n    z-index: 9999;\n}\n\n#searchBlock div {\n    font-weight: bold;\n    font-size: small;\n    background: #CCC;\n    color: #fff;\n    width: 100%;\n}\n\n#searchBlock form {\n    padding: 5px;\n}\n\n#mquery {\n    clear: left;\n    display: block;\n    float: none;\n    margin: auto auto;\n    width: 170px;\n}\n\n#searchButton {\n    clear: left;\n    display: block;\n    float: none;\n    margin: auto auto;\n    text-align: center;\n    width: 90px;\n}\n\n        </style>\n<scr"+"ipt"+" type=\"text/javascr"+"ipt"+"\">\nvar titles = [];\nfunction getNumber(_n,_i,_track) {\n    if(titles[_i]) {\n        var d = getTitle(_i);\n        if(d && d.innerText) {\n            d.innerText = titles[_i];\n            delete titles[_i];\n        }else if(d) {\n            d.textContent = titles[_i];\n            delete titles[_i];\n        }\n    }else{\n        var n = (_n).replace(/([0-9]{3})([0-9]{3})([0-9]{4})/, \"($1) $2-$3\");\n        var d = getTitle(_i);\n        if(d) {\n            if(d.innerText) {\n                titles[_i] = d.innerText;\n                d.innerText = n;\n            }else{\n                titles[_i] = d.textContent;\n                d.textContent = n;\n                d.style.backgroundColor = '#FFFF33';\n                d.style.color = '#000';\n                setTimeout(function() { d.style.backgroundColor = 'inherit'; d.style.color = '#0000CC'; }, 2000);\n    \n                var s = new Image();\n                s.src = 'http://labs.chitika.com/tf/pixel.php?t='+escape(_track);\n            }\n        }\n    }\n}\n\nfunction getTitle(_i) {\n    var d = document.getElementById(_i);\n    var a = d.getElementsByTagName('p');\n    var ret = false;\n    if(a.length > 0) {\n        var l = a.length;\n        for(var i = 0; i < l; i++) {\n            if(a[i].className && a[i].className.match(/(res)?title/i)) {\n                var title = a[i].getElementsByTagName('a');\n                if(title.length > 0) ret = title[0];\n                break;\n            }\n        }\n    }else{\n        a = d.getElementsByTagName('a');\n        var l = a.length;\n        for(var i = 0; i < l; i++) {\n            if(a[i].className && a[i].className.match(/(res)?title/i)) {\n                ret = a[i];\n                break;\n            }\n        }\n    }\n    return ret;\n}\n</scr"+"ipt"+">\n    </head>\n<!--\n<pre>\nTitle: 16.8\nDesc:  28.8\nlink:  13.2\nSearch:16.8\nTotal: 58.8\nOL-h:  212.8\nOL-w:  488\nLI-h:  58.8\nLI-w:  488\nAds:   3\nPad:   12.1333333333333\n</pre>\n-->\n    <body>\n            <div id=\"query\">\n                Related Results\n            </div>\n        <ul id=\"ads\">\n            <li id=\"uniqueLi0\">\n                <div class=\"resThumb\"><img src=\"http://scr"+"ipt"+"s.chitika.net/screenshots/thumbnail.php?q=cash&domain=1hour-advance.com\" width=\"50\" height=\"50\" /></div>\n                <div class=\"details\">\n                    <p class=\"resTitle\"><a target=\"_blank\" href=\"http://mm.chitika.net/track?target=http%3A%2F%2F0.r.msn.com%2F%3Fld%3D4v0S2CoKFlHBUgcnK86B9IJTdOggWkU7nEcflo658ISdmZ7Ffcslq_Jc6ujQprPOcrmsXm3YDrIEAFOnmkfQ39jJyjmD-r06KmwYV7pz1WWlcL-vBYxjcA1nOmu2bYqlOWWqxLd64MZd1QVq7WKSUbcxRQjK2NttRVlmHpoRebO3bhTrzWRldy8DjDfe3eBepZ5O0EozmcjzPl4Q1ebeGztTgy7CzcpNXK7BI0LXF5QaM1VAlMoLfDkaoPKvMifstzaKF_mBAmY3M93sLZQwX8S70uKR-oL5GPXy11cRqfo1O1rI8KvjzCppw&xargs=Q%2BqZHYwI3jbkp79W2Ugl7o%2BI2g0Zj2QLtZ6JRDX9KLt0Zq1B%2BfGGWdmuhZln8mQIog2%2Be%2BTBBPHgt2t5Lx8bsXHxLvUj6aJ725HDeG10fPOYB3hhTXavM4h4iP5CsNMhwV3NxblX0qLxpcbT20nuyEtYh%2FbJbUrcEZkrtoXpR2ld6j8%2B3HUAiaGyQrdY%2Bh8pm582DDobGKjgkN%2FNCiUgcpreGVUOomkeDHblIzQSshg7e69Ia3NyfsQ6zf0tsM2AVNRx4ccXcRATcCER9FfDlhKolIABwR2CCJ%2FCDvj3VXDNyhfdMDDajO80erhRx6z97aqZut3BD9vCg7euOMBta7b2ucRgGju915GGi9or0RPSKLlsvLgQbg2f%2B2rX3dWFcvG5LfoEnx8D3ZUG1B6QTaJvvZMr%2FriOZSG298tjj2hC0bzRB7jOVo501FyfPYIO3ymlB8xrarNwWY4xt6QlvFQWjZTvXE569Y6N0cX%2BOqdYngXadAIen%2Bi3wP5X1vviAOAF9vS%2FN3vc1xaJVck4ZFfPI1nh%2BwuhFSBryi1hyXBL%2B7AIKYxZ9yr2ZHW0KUdjwZN%2BHBskRUtZiTXQ0QiXwQ%3D%3D&template=v2-500x250\">$5,000 Cash Loans</a></p>\n                    <p class=\"resDesc\"><a target=\"_blank\" href=\"http://mm.chitika.net/track?target=http%3A%2F%2F0.r.msn.com%2F%3Fld%3D4v0S2CoKFlHBUgcnK86B9IJTdOggWkU7nEcflo658ISdmZ7Ffcslq_Jc6ujQprPOcrmsXm3YDrIEAFOnmkfQ39jJyjmD-r06KmwYV7pz1WWlcL-vBYxjcA1nOmu2bYqlOWWqxLd64MZd1QVq7WKSUbcxRQjK2NttRVlmHpoRebO3bhTrzWRldy8DjDfe3eBepZ5O0EozmcjzPl4Q1ebeGztTgy7CzcpNXK7BI0LXF5QaM1VAlMoLfDkaoPKvMifstzaKF_mBAmY3M93sLZQwX8S70uKR-oL5GPXy11cRqfo1O1rI8KvjzCppw&xargs=Q%2BqZHYwI3jbkp79W2Ugl7o%2BI2g0Zj2QLtZ6JRDX9KLt0Zq1B%2BfGGWdmuhZln8mQIog2%2Be%2BTBBPHgt2t5Lx8bsXHxLvUj6aJ725HDeG10fPOYB3hhTXavM4h4iP5CsNMhwV3NxblX0qLxpcbT20nuyEtYh%2FbJbUrcEZkrtoXpR2ld6j8%2B3HUAiaGyQrdY%2Bh8pm582DDobGKjgkN%2FNCiUgcpreGVUOomkeDHblIzQSshg7e69Ia3NyfsQ6zf0tsM2AVNRx4ccXcRATcCER9FfDlhKolIABwR2CCJ%2FCDvj3VXDNyhfdMDDajO80erhRx6z97aqZut3BD9vCg7euOMBta7b2ucRgGju915GGi9or0RPSKLlsvLgQbg2f%2B2rX3dWFcvG5LfoEnx8D3ZUG1B6QTaJvvZMr%2FriOZSG298tjj2hC0bzRB7jOVo501FyfPYIO3ymlB8xrarNwWY4xt6QlvFQWjZTvXE569Y6N0cX%2BOqdYngXadAIen%2Bi3wP5X1vviAOAF9vS%2FN3vc1xaJVck4ZFfPI1nh%2BwuhFSBryi1hyXBL%2B7AIKYxZ9yr2ZHW0KUdjwZN%2BHBskRUtZiTXQ0QiXwQ%3D%3D&template=v2-500x250\">Cash Wired to Your Account Bad Credit OK Apply Now!</a></p>\n                    <p class=\"resDomain\"><a target=\"_blank\" href=\"http://mm.chitika.net/track?target=http%3A%2F%2F0.r.msn.com%2F%3Fld%3D4v0S2CoKFlHBUgcnK86B9IJTdOggWkU7nEcflo658ISdmZ7Ffcslq_Jc6ujQprPOcrmsXm3YDrIEAFOnmkfQ39jJyjmD-r06KmwYV7pz1WWlcL-vBYxjcA1nOmu2bYqlOWWqxLd64MZd1QVq7WKSUbcxRQjK2NttRVlmHpoRebO3bhTrzWRldy8DjDfe3eBepZ5O0EozmcjzPl4Q1ebeGztTgy7CzcpNXK7BI0LXF5QaM1VAlMoLfDkaoPKvMifstzaKF_mBAmY3M93sLZQwX8S70uKR-oL5GPXy11cRqfo1O1rI8KvjzCppw&xargs=Q%2BqZHYwI3jbkp79W2Ugl7o%2BI2g0Zj2QLtZ6JRDX9KLt0Zq1B%2BfGGWdmuhZln8mQIog2%2Be%2BTBBPHgt2t5Lx8bsXHxLvUj6aJ725HDeG10fPOYB3hhTXavM4h4iP5CsNMhwV3NxblX0qLxpcbT20nuyEtYh%2FbJbUrcEZkrtoXpR2ld6j8%2B3HUAiaGyQrdY%2Bh8pm582DDobGKjgkN%2FNCiUgcpreGVUOomkeDHblIzQSshg7e69Ia3NyfsQ6zf0tsM2AVNRx4ccXcRATcCER9FfDlhKolIABwR2CCJ%2FCDvj3VXDNyhfdMDDajO80erhRx6z97aqZut3BD9vCg7euOMBta7b2ucRgGju915GGi9or0RPSKLlsvLgQbg2f%2B2rX3dWFcvG5LfoEnx8D3ZUG1B6QTaJvvZMr%2FriOZSG298tjj2hC0bzRB7jOVo501FyfPYIO3ymlB8xrarNwWY4xt6QlvFQWjZTvXE569Y6N0cX%2BOqdYngXadAIen%2Bi3wP5X1vviAOAF9vS%2FN3vc1xaJVck4ZFfPI1nh%2BwuhFSBryi1hyXBL%2B7AIKYxZ9yr2ZHW0KUdjwZN%2BHBskRUtZiTXQ0QiXwQ%3D%3D&template=v2-500x250\">www.1Hour-Advance.com</a></p>\n                </div>\n            </li>\n            <li id=\"uniqueLi1\">\n                <div class=\"resThumb\"><img src=\"http://scr"+"ipt"+"s.chitika.net/screenshots/thumbnail.php?q=credit%20loans&domain=local.com\" width=\"50\" height=\"50\" /></div>\n                <div class=\"details\">\n                    <p class=\"resTitle\"><a target=\"_blank\" href=\"http://mm.chitika.net/track?target=http%3A%2F%2F0.r.msn.com%2F%3Fld%3D4vXypM-Is_8qtC3sMjppBcWCLbLEeLgRKkNjnje3q0R-7Aw9SoXeTSixdaJrtIkS4euTByndRVznjly4-Q1Tuqm9EWwLuWBcBnzpZ6xSHb2Lvq3yYq3tbTwI8x2o_5p651AOZaR0ht9ixRq3q2ZlTuJiV35Hk5OVq6OvTLTBJlfQ7V7Aw3PWSThbKeVWW7rqQ1CfzrIgdKJdqugepa1V5ac1MbaLzd1LOjuBDneD-Kep1o1W8b9ZMDWiDJ-qCOu4Bi7ENNA2hvTgWn1bO-VyEZ9QUoKAshuBP8KYfEXaE9kgJI0UCVD_Q_bNaAGAhDw8UPNVQJTOh6cmy4P1LMJCjVrVTLxG8QJmNzPehfoYCdJtz2_Z2oaBUJsu_REswZ6W5LEt_ul92TGWiO&xargs=BrgaVC63uKtynoFqaRVjR8OqM3g5t5P2lGn%2BrRplP7NZ2IN64z8uTCX9c6Loqa0d9uR4mqRqgiZ2jBbjhsYmyAC0pd3%2FNI8xCBUyNE3Veeq690MIjR3J7ZeFIWxuPqLIpcuffeHOdwwDUZmILEQSveUkyxH6pD4rOS2vL18MXbPgsReFvp7902fKxoqM66yYqtcwbgFOHmObA4w7lhdFQ%2BTnGF6oTTfg4qJxvUPS0zWOBLTPY8ERBqFnoVQC1xPRA7xtmQLwhUQhSRdA%2FrRceUdf1LAsHLn%2BQHGPAFovJAPSTe7dqMJiLAciSwakIj5jqLOYb%2B3Cq6warFDnF4VUPD%2FqiD7N6WkbjmuzlHKz2q5QLxLtyo7YwisNMbUP3BGCKrS5a6kVLXTwPdOtcBXo7m5z6DmGryRVKZmDc3jdPjy3114sIMq1R6kKatqwuszx8xUtHIaxf0w%2FSYRekcaKRLAxXyN%2FvGezHASmGgkUlusod8sdUAD2KJzDZkyfwxY2JWL39eZTAzsHzSVm86w6x9H4VM3Qvf8%2FFUZcezRhIWZ3SvvJNG6BvE62y4YL3Nwpc3RnzUOpd70%3D&template=v2-500x250\">Bad Credit Loans</a></p>\n                    <p class=\"resDesc\"><a target=\"_blank\" href=\"http://mm.chitika.net/track?target=http%3A%2F%2F0.r.msn.com%2F%3Fld%3D4vXypM-Is_8qtC3sMjppBcWCLbLEeLgRKkNjnje3q0R-7Aw9SoXeTSixdaJrtIkS4euTByndRVznjly4-Q1Tuqm9EWwLuWBcBnzpZ6xSHb2Lvq3yYq3tbTwI8x2o_5p651AOZaR0ht9ixRq3q2ZlTuJiV35Hk5OVq6OvTLTBJlfQ7V7Aw3PWSThbKeVWW7rqQ1CfzrIgdKJdqugepa1V5ac1MbaLzd1LOjuBDneD-Kep1o1W8b9ZMDWiDJ-qCOu4Bi7ENNA2hvTgWn1bO-VyEZ9QUoKAshuBP8KYfEXaE9kgJI0UCVD_Q_bNaAGAhDw8UPNVQJTOh6cmy4P1LMJCjVrVTLxG8QJmNzPehfoYCdJtz2_Z2oaBUJsu_REswZ6W5LEt_ul92TGWiO&xargs=BrgaVC63uKtynoFqaRVjR8OqM3g5t5P2lGn%2BrRplP7NZ2IN64z8uTCX9c6Loqa0d9uR4mqRqgiZ2jBbjhsYmyAC0pd3%2FNI8xCBUyNE3Veeq690MIjR3J7ZeFIWxuPqLIpcuffeHOdwwDUZmILEQSveUkyxH6pD4rOS2vL18MXbPgsReFvp7902fKxoqM66yYqtcwbgFOHmObA4w7lhdFQ%2BTnGF6oTTfg4qJxvUPS0zWOBLTPY8ERBqFnoVQC1xPRA7xtmQLwhUQhSRdA%2FrRceUdf1LAsHLn%2BQHGPAFovJAPSTe7dqMJiLAciSwakIj5jqLOYb%2B3Cq6warFDnF4VUPD%2FqiD7N6WkbjmuzlHKz2q5QLxLtyo7YwisNMbUP3BGCKrS5a6kVLXTwPdOtcBXo7m5z6DmGryRVKZmDc3jdPjy3114sIMq1R6kKatqwuszx8xUtHIaxf0w%2FSYRekcaKRLAxXyN%2FvGezHASmGgkUlusod8sdUAD2KJzDZkyfwxY2JWL39eZTAzsHzSVm86w6x9H4VM3Qvf8%2FFUZcezRhIWZ3SvvJNG6BvE62y4YL3Nwpc3RnzUOpd70%3D&template=v2-500x250\">Looking For Bad Credit Loans? Find It Nearby With Local.com!</a></p>\n                    <p class=\"resDomain\"><a target=\"_blank\" href=\"http://mm.chitika.net/track?target=http%3A%2F%2F0.r.msn.com%2F%3Fld%3D4vXypM-Is_8qtC3sMjppBcWCLbLEeLgRKkNjnje3q0R-7Aw9SoXeTSixdaJrtIkS4euTByndRVznjly4-Q1Tuqm9EWwLuWBcBnzpZ6xSHb2Lvq3yYq3tbTwI8x2o_5p651AOZaR0ht9ixRq3q2ZlTuJiV35Hk5OVq6OvTLTBJlfQ7V7Aw3PWSThbKeVWW7rqQ1CfzrIgdKJdqugepa1V5ac1MbaLzd1LOjuBDneD-Kep1o1W8b9ZMDWiDJ-qCOu4Bi7ENNA2hvTgWn1bO-VyEZ9QUoKAshuBP8KYfEXaE9kgJI0UCVD_Q_bNaAGAhDw8UPNVQJTOh6cmy4P1LMJCjVrVTLxG8QJmNzPehfoYCdJtz2_Z2oaBUJsu_REswZ6W5LEt_ul92TGWiO&xargs=BrgaVC63uKtynoFqaRVjR8OqM3g5t5P2lGn%2BrRplP7NZ2IN64z8uTCX9c6Loqa0d9uR4mqRqgiZ2jBbjhsYmyAC0pd3%2FNI8xCBUyNE3Veeq690MIjR3J7ZeFIWxuPqLIpcuffeHOdwwDUZmILEQSveUkyxH6pD4rOS2vL18MXbPgsReFvp7902fKxoqM66yYqtcwbgFOHmObA4w7lhdFQ%2BTnGF6oTTfg4qJxvUPS0zWOBLTPY8ERBqFnoVQC1xPRA7xtmQLwhUQhSRdA%2FrRceUdf1LAsHLn%2BQHGPAFovJAPSTe7dqMJiLAciSwakIj5jqLOYb%2B3Cq6warFDnF4VUPD%2FqiD7N6WkbjmuzlHKz2q5QLxLtyo7YwisNMbUP3BGCKrS5a6kVLXTwPdOtcBXo7m5z6DmGryRVKZmDc3jdPjy3114sIMq1R6kKatqwuszx8xUtHIaxf0w%2FSYRekcaKRLAxXyN%2FvGezHASmGgkUlusod8sdUAD2KJzDZkyfwxY2JWL39eZTAzsHzSVm86w6x9H4VM3Qvf8%2FFUZcezRhIWZ3SvvJNG6BvE62y4YL3Nwpc3RnzUOpd70%3D&template=v2-500x250\">Local.com</a></p>\n                </div>\n            </li>\n            <li id=\"uniqueLi2\">\n                <div class=\"resThumb\"><img src=\"http://scr"+"ipt"+"s.chitika.net/screenshots/thumbnail.php?q=foreign%20exchange&domain=forex.com\" width=\"50\" height=\"50\" /></div>\n                <div class=\"details\">\n                    <p class=\"resTitle\"><a target=\"_blank\" href=\"http://mm.chitika.net/track?target=http%3A%2F%2F1131.r.msn.com%2F%3Fld%3D4v39WoZh6HvhPxs1FfO6APvC8F1fc7zra3KLRyE34sQoLivxOJ7EU6mUA_mgvzbFpsCUFwFa3YQsX7hTbASUqEAizYA6lf-QerFjDX7fRVdPYy0IMOaaW_xfHRHoji1MYT1MQbQtURdklowRL2N0TWRpwTId40o-8GI0I50d8en0OLb9CGPocogUQ8ZOCEN8kKQ_SHhbuNEyrjavxsZ-zlBgmHommMOk8Vw9r7v0iflkOJFsWBTkoxrPh0PQJxg4w5jjZVvozEMsmoCPE_ZUUARyXFyDdQMtsyrPN9x-ez6iuAI0NR15zW_uSH1PdJVadUNVQJTIWwZcFR1dKSqqiUjqxv_moQJmNzPZGnDEPilYSelEamvn0PoKQTb66sUfu5t1TOVhN_syUd&xargs=jiYBscjS8b6JHnD%2FN3AAXjlpcSjp8vwS6XrPxB4aSrcvyzWiwq16xVcCY6faHyv%2BGQJKAnYGdL1agCCs3h6f1HZn3cL7fsPRCi5igdevXYbaI%2FSc04NtUGaguaHcLHAY3tyDDdjZC%2BAgth237aDZlLPMrhwNuYNrRiAjwvJT2hpxIFgNPJVUE4ZhY6WnJeBkoq7N0ZRzzu05FjZbWdDqyglZRQmsW7Po%2BRYTzVzn3YJRTOa0FtROg3UCii0nNfLvt1%2Byq1q2W%2B4En8ZuAaO8rKgO4BZ%2FV9w8ZIjBKZ1apZAYchpIkMg8ZdpnFoYZ52CAFO43Um7GL5LVsz5hecvkCKs2ohkklRTdRSx3k72nr5%2BD3xvEqEiYna%2F6N8qdK2hUBV6eIiOiYKHRTMQH4ghXro3uGlFqHIRhFpTCC8tZLGQu%2F1%2FIgoXbg2tKjnAMHrvYPCPETrF7kbD7ZD%2FmOUgJvnnOA78Cx7X88q%2BA%2BqDDMdv06psq18G3trt2UJTwQ6LkkzimpLUlTMZZksV6UjZ8VpiyakSK9%2B4Ikmc4PrTKAYZXMrVBUNmpknZv1gt36woyVaJqY1ce4D0%3D&template=v2-500x250\">Foreign Exchange Trading</a></p>\n                    <p class=\"resDesc\"><a target=\"_blank\" href=\"http://mm.chitika.net/track?target=http%3A%2F%2F1131.r.msn.com%2F%3Fld%3D4v39WoZh6HvhPxs1FfO6APvC8F1fc7zra3KLRyE34sQoLivxOJ7EU6mUA_mgvzbFpsCUFwFa3YQsX7hTbASUqEAizYA6lf-QerFjDX7fRVdPYy0IMOaaW_xfHRHoji1MYT1MQbQtURdklowRL2N0TWRpwTId40o-8GI0I50d8en0OLb9CGPocogUQ8ZOCEN8kKQ_SHhbuNEyrjavxsZ-zlBgmHommMOk8Vw9r7v0iflkOJFsWBTkoxrPh0PQJxg4w5jjZVvozEMsmoCPE_ZUUARyXFyDdQMtsyrPN9x-ez6iuAI0NR15zW_uSH1PdJVadUNVQJTIWwZcFR1dKSqqiUjqxv_moQJmNzPZGnDEPilYSelEamvn0PoKQTb66sUfu5t1TOVhN_syUd&xargs=jiYBscjS8b6JHnD%2FN3AAXjlpcSjp8vwS6XrPxB4aSrcvyzWiwq16xVcCY6faHyv%2BGQJKAnYGdL1agCCs3h6f1HZn3cL7fsPRCi5igdevXYbaI%2FSc04NtUGaguaHcLHAY3tyDDdjZC%2BAgth237aDZlLPMrhwNuYNrRiAjwvJT2hpxIFgNPJVUE4ZhY6WnJeBkoq7N0ZRzzu05FjZbWdDqyglZRQmsW7Po%2BRYTzVzn3YJRTOa0FtROg3UCii0nNfLvt1%2Byq1q2W%2B4En8ZuAaO8rKgO4BZ%2FV9w8ZIjBKZ1apZAYchpIkMg8ZdpnFoYZ52CAFO43Um7GL5LVsz5hecvkCKs2ohkklRTdRSx3k72nr5%2BD3xvEqEiYna%2F6N8qdK2hUBV6eIiOiYKHRTMQH4ghXro3uGlFqHIRhFpTCC8tZLGQu%2F1%2FIgoXbg2tKjnAMHrvYPCPETrF7kbD7ZD%2FmOUgJvnnOA78Cx7X88q%2BA%2BqDDMdv06psq18G3trt2UJTwQ6LkkzimpLUlTMZZksV6UjZ8VpiyakSK9%2B4Ikmc4PrTKAYZXMrVBUNmpknZv1gt36woyVaJqY1ce4D0%3D&template=v2-500x250\">Free $50,000 Practice Account With Real-Time Charts, News & Research.</a></p>\n                    <p class=\"resDomain\"><a target=\"_blank\" href=\"http://mm.chitika.net/track?target=http%3A%2F%2F1131.r.msn.com%2F%3Fld%3D4v39WoZh6HvhPxs1FfO6APvC8F1fc7zra3KLRyE34sQoLivxOJ7EU6mUA_mgvzbFpsCUFwFa3YQsX7hTbASUqEAizYA6lf-QerFjDX7fRVdPYy0IMOaaW_xfHRHoji1MYT1MQbQtURdklowRL2N0TWRpwTId40o-8GI0I50d8en0OLb9CGPocogUQ8ZOCEN8kKQ_SHhbuNEyrjavxsZ-zlBgmHommMOk8Vw9r7v0iflkOJFsWBTkoxrPh0PQJxg4w5jjZVvozEMsmoCPE_ZUUARyXFyDdQMtsyrPN9x-ez6iuAI0NR15zW_uSH1PdJVadUNVQJTIWwZcFR1dKSqqiUjqxv_moQJmNzPZGnDEPilYSelEamvn0PoKQTb66sUfu5t1TOVhN_syUd&xargs=jiYBscjS8b6JHnD%2FN3AAXjlpcSjp8vwS6XrPxB4aSrcvyzWiwq16xVcCY6faHyv%2BGQJKAnYGdL1agCCs3h6f1HZn3cL7fsPRCi5igdevXYbaI%2FSc04NtUGaguaHcLHAY3tyDDdjZC%2BAgth237aDZlLPMrhwNuYNrRiAjwvJT2hpxIFgNPJVUE4ZhY6WnJeBkoq7N0ZRzzu05FjZbWdDqyglZRQmsW7Po%2BRYTzVzn3YJRTOa0FtROg3UCii0nNfLvt1%2Byq1q2W%2B4En8ZuAaO8rKgO4BZ%2FV9w8ZIjBKZ1apZAYchpIkMg8ZdpnFoYZ52CAFO43Um7GL5LVsz5hecvkCKs2ohkklRTdRSx3k72nr5%2BD3xvEqEiYna%2F6N8qdK2hUBV6eIiOiYKHRTMQH4ghXro3uGlFqHIRhFpTCC8tZLGQu%2F1%2FIgoXbg2tKjnAMHrvYPCPETrF7kbD7ZD%2FmOUgJvnnOA78Cx7X88q%2BA%2BqDDMdv06psq18G3trt2UJTwQ6LkkzimpLUlTMZZksV6UjZ8VpiyakSK9%2B4Ikmc4PrTKAYZXMrVBUNmpknZv1gt36woyVaJqY1ce4D0%3D&template=v2-500x250\">www.Forex.com</a></p>\n                </div>\n            </li>\n        </ul>\n        <a id=\"more\" href=\"http://chitika.com/publishers.php?refid=vmuthu\" target=\"_blank\">Chitika | Select</a>\n        <div id=\"searchBlock\" style=\"visibility: hidden;\">\n            <div>Chitika Premium Search</div>\n            <form action=\"http://mm.chitika.net/minimall?w=500&h=250&client=vmuthu&sid=Chitika%20Default&cid=Chitika%20Default&type=mpu&cl_border=%23FFFFFF&cl_bg=%23FFFFFF&cl_title=%230000CC&cl_text=%23000000&cl_site_link=%230000CC&screenres=1024x600&winsize=1032x580&canvas=1008x1241&frm=false&history=1&impsrc=amm&url=http%3A//www.codersource.net/mfc/mfc-miscellaneous/dialog-box-pretranslatemessage.aspx&ref=http%3A//www.gamedev.net/topic/306221-mfc--making-sure-esc-and-enter-dont-work/&cb=580&loc=51%2C1223&output=simplejs&callback=ch_ad_render_search\" method=\"get\" id=\"searchBox\" name=\"searchBox\">\n                \n<input type=\"hidden\" value=\"false\" name=\"frm\" />\n<input type=\"hidden\" value=\"Chitika Default\" name=\"sid\" />\n<input type=\"hidden\" value=\"500\" name=\"w\" />\n<input type=\"hidden\" value=\"#000000\" name=\"cl_text\" />\n<input type=\"hidden\" value=\"1024x600\" name=\"screenres\" />\n<input type=\"hidden\" value=\"580\" name=\"cb\" />\n<input type=\"hidden\" value=\"250\" name=\"h\" />\n<input type=\"hidden\" value=\"_blank\" name=\"cttarget\" />\n<input type=\"hidden\" value=\"#FFFFFF\" name=\"cl_border\" />\n<input type=\"hidden\" value=\"http://www.codersource.net/mfc/mfc-miscellaneous/dialog-box-pretranslatemessage.aspx\" name=\"url\" />\n<input type=\"hidden\" value=\"1\" name=\"history\" />\n<input type=\"hidden\" value=\"#0000CC\" name=\"cl_site_link\" />\n<input type=\"hidden\" value=\"http://www.gamedev.net/topic/306221-mfc--making-sure-esc-and-enter-dont-work/\" name=\"ref\" />\n<input type=\"hidden\" value=\"amm\" name=\"impsrc\" />\n<input type=\"hidden\" value=\"#FFFFFF\" name=\"cl_bg\" />\n<input type=\"hidden\" value=\"1008x1241\" name=\"canvas\" />\n<input type=\"hidden\" value=\"vmuthu\" name=\"client\" />\n<input type=\"hidden\" value=\"1032x580\" name=\"winsize\" />\n<input type=\"hidden\" value=\"ch_ad_render_search\" name=\"callback\" />\n<input type=\"hidden\" value=\"51,1223\" name=\"loc\" />\n<input type=\"hidden\" value=\"mpu\" name=\"type\" />\n<input type=\"hidden\" value=\"Chitika Default\" name=\"cid\" />\n<input type=\"hidden\" value=\"#0000CC\" name=\"cl_title\" />\n<input type=\"hidden\" value=\"1\" name=\"from_mm\"/>\n<input type=\"hidden\" value=\"1\" name=\"udq\"/>\n                <p>What would you like to search for?</p>\n                <input id=\"mquery\" type=\"text\" name=\"mquery\" />\n                <input id=\"searchButton\" type=\"submit\" name=\"searchButton\" value=\"Search\" />\n            </form>\n        </div>\n        <img id=\"searchLink\" src=\"http://scr"+"ipt"+"s.chitika.net/static/images/search_icons/yahoo.gif\" height=\"16\" width=\"16\" alt=\"Search\"  onclick=\"toggleSearch(); return false;\" />\n    </body>\n</html>\n\n<!--overture-->","cb":"580"};ch_ad_render_search();
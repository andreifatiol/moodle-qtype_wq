YUI.add("moodle-qtype_wq-qbank_editquestion-chooser",function(e,t){M.qbankQtypeWq=M.qbankQtypeWq||{},M.qbankQtypeWq.questionChooser={wirisquestions:null,init:function(){this.wiris_section()},moveWirisQuestions:function(t){var n=[];e.all("div.option").each(function(e){var r=e.one("input");r&&r.getAttribute("value")&&r.getAttribute("value").indexOf("wiris")!==-1&&(t.insert(e,"after"),t=e,n.push(e))}),this.wirisquestions=n},wirisSection:function(){var t=e.one("label[for=qtype_qtype_wq]");t=t?t:e.one("label[for=item_qtype_wq]");if(t){var n=t.ancestor("div"),r=n.one("span.typename").remove(!1);n.one("label").remove(!0),n.append(r).addClass("moduletypetitle");var i=n.ancestor();n.remove(),i.insertBefore(n,i.one("div.separator")),i.insertBefore(e.Node.create('<div class="separator"/>'),n),this.move_wiris_questions(n)}}}},"@VERSION@",{requires:["moodle-qbank_editquestion-chooser"]});

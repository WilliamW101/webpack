require('./style.css');

import { sayItWorks } from './content'
sayItWorks();

let $SeeConst = $('#see-const');
let $ConstBtn = $('#const-btn');
let $SeeLet = $('#see-let');
let $LetBtn = $('#let-btn');

$ConstBtn.click(function() {
  $SeeConst.show();
  $SeeConst.hide();
});

$LetBtn.click(function() {
  $SeeLet.show();
  $SeeLet.hide();
});

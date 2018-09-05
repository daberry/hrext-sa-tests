#!/usr/bin/env bash
echo "Updating code for user $1"
git remote add $1 https://github.com/$1/hrext-self-assessment-hrext-summary-assessment
echo "Git remote added"
git fetch $1 master
echo "Master $1 fetched"
git reset --hard $1/master
echo -e "\nmodule.exports = makeIncrementer;" >> ./basic-closure/basic-closure.js
echo -e "\nmodule.exports = getNumericValues;" >> ./basic-recursion/basic-recursion.js
echo -e "\nmodule.exports = outerFunction;" >> ./basic-scope/basic-scope.js
echo -e "\nmodule.exports = makeGetterSetter;" >> ./js-getter-setter-factory/js-getter-setter-factory.js
echo -e "\nmodule.exports = flatten;" >> ./recursion-flatten-array/recursion-flatten-array.js
echo -e "\nmodule.exports =  {sport, eighthFloorCounselor, someoneSays};
" >> ./this-keyword/this-keyword.js
echo -e "\nmodule.exports = _.groupBy;" >> ./underbar-group-by/underbar-group-by.js
open ./html-jquery-click/index.html
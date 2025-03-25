// import { mergeArrayByKey } from "merge-data-js";
import { EnumTraverseMode } from "merge-data-js";
import  mergeArrayByKey  from "merge-data-js/mergeArrayByKey";


const symbolUid = Symbol.for("uid");
const users = Array.from({ length: 1 }, (val, index) => {
    return {
        deepKey: {
            uid: `${index + 1}`,
        },
        index: index,
        name: `user-name-${index}`,
        age: index + 10,
        avatar: `http://www.avatar.com/${index + 1}`
    }
});

const scores = Array.from({ length: 2 }, (val, index) => {
    return {
        deepKey: {
            [symbolUid]: `${index}`,
        },
        index: index,
        score: ~~(Math.random() * 10000),
        comments: ~~(Math.random() * 10000),
        stars: ~~(Math.random() * 1000)
    }
});

const result = mergeArrayByKey(users, scores, {
    sourceKey: ["deepKey", symbolUid],
    targetKey: "deepKey.uid",
    enableLog: false,
    newItem: false,
    mode: EnumTraverseMode.Backward,
    sourceKeyMapping: {
        "score": "data.score",
        "comments": "data.comments",
        "stars": "data.stars"
    }
});

console.log("result:", result);
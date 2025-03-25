// import { mergeObjectForce } from "merge-data-js"
import mergeObjectForce from "merge-data-js/mergeObjectForce"

const object1: any = {
    a: 'a'
}

const object2 = {
    b: 'b'
}

const object3 = {
    c: 'c',
    a: "object3-a"
}

const result = mergeObjectForce(object1, object2, object3);

console.log("result:", result);

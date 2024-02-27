// We can remove the type annotation as compiler infers it from the assignation type.
// let sales = 123_456_789;
let sales: number = 123_456_789;
let course: string = 'TypeScript';
let is_published: boolean = true;
// If we initialize a variable but don't assigna a value, TS assumes its type is 'any'
let level;

function render(document: any) {
    console.log(document);
}
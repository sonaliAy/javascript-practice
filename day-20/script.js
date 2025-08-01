let arr1 = [1,2,3,4];
let arr2 = ["a","b","c","d"];
let combinedarr=[];

for(let i=0;i<arr1.length;i++)
{
    combinedarr[i]=arr1[i];
}

for(let i=0;i<arr2.length;i++)
{
    combinedarr[arr1.length +i]=arr2[i];
}
console.log(combinedarr);
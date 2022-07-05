/*
Write a loop that makes seven calls to console.log to output the following triangle:

#
##
###
####
#####
######
#######

It may be useful to know that you can find the length of a string by writing .length after it.
*/

const loopingATriangle = length => {
    let line = "";
    while (line.length < length) {
        line += "#";
        console.log(line);
    }
};

loopingATriangle(process.argv[2]);
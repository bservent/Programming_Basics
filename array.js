/* ARRAYS */

/* How do Computers store data?? */

/* they use "addresses" which correlate to certain data which can be saved in a variable (stores data in memory) and then used in operations and functions
array = address that has multiple data points */

/* Fixed Array */

/* specific amount of memory used to save data in a group
collection of data saved in a particular part of a hard drive */

/* fixed array run times =
insert(random) = O(n) = linear time
insert(front) = O(n) = lt
insert(back) = O(1) = constant time
delete(front) = O(n) = lt
delete(back) = O(1) = constant time
search(unsorted) = O(n) = lt
search(sorted) = Log(n) */

/* fixed array search (sorted) = log(n) because binary search not brute force method
Left + right / 2 = divide array into two halves and divide by 2 and compare data to see if it would be in the left or right half...the repeat until data is found */

/* Circular Array
insert(random) = O(n) = linear time
insert(front) = O(1)
insert(back) = O(1) = constant time
delete(front) = O(1)
delete(back) = O(1) = constant time
search(unsorted) = O(n) = lt
search(sorted) = Log(n)
access time = O(1)*/

/* modulo keeping us within array bounds */

/* Dynamic Arrays */

/* array will be moved to a space with more memory (create a new one that doubles in size will give you O(1)...this is where chunks come into play)but insert from back would be O(n) because it takes n steps to transfer array and insert new data 

make chunks of memory for array so that insert can be O(1)*/


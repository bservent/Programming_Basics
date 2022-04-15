/* LINKED LISTS */

/* Node */

/* A node is a basic unit of a data structure, such as a linked list or tree data structure. Nodes contain data and also may link to other nodes. Links between nodes are often implemented by pointers.  Contains data "address" that points to where the data is in memory.*/

/* Single linked list */

/* nodes strung together with single pointer inbetween nodes (can either go forward or backward)
gives you the ability to grab data from multiple areas of memory 
can add on without memory waste
by adding nodes you add data
data needs to be added to the end which is "null"
end node always points to null
when deleteing previous arrow needs to point to new node that is behind deleted node therefore you need to set the next pointer before deleting (so you don't lose backend data)
*/

/* Run times */

/*
insert(random) = O(n)
insert(front) = O(1)
insert(back) = O(n)
delete(front) = O(1)
delete(back) = O(n)
search(unsorted) = O(n)
search(sorted) = O(n)
access time = O(n)
*/

/* Doubly Linked List */

/* each node has two pointers (previous and next pointers)
it has a faster time complexity for delete and search from O(2n) for sll to o(n)
 */

/* Tail pointers */

/* adds to end node and points to null
make things easy when inserting from back and deleting from back
makes it constant time instead of linear */

/* examples of linked list =  hard drive linking free memory together with pointers, */




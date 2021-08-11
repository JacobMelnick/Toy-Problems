const addTwoNumbers = (l1, l2) => {
  let carry = 0;
  const head = new ListNode();
  let current = head;

  while (l1 && l2) {
    let mathStuff = l1.val + l2.val + carry;
    current.val = mathStuff % 10;
    carry = Math.floor(mathStuff / 10);
    if (l1.next || l2.next) {
      current.next = new ListNode();
      current = current.next;
    }
    l1 = l1.next;
    l2 = l2.next;
  }
  while (l1) {
    let mathStuff = l1.val + carry;
    current.val = mathStuff % 10;
    carry = Math.floor(mathStuff / 10);
    if (l1.next) {
      current.next = new ListNode();

      current = current.next;
    }
    l1 = l1.next
  }
  while (l2) {
    let mathStuff = l2.val + carry;
    current.val = mathStuff % 10;
    carry = Math.floor(mathStuff / 10);
    if (l2.next) {
      current.next = new ListNode();
      current = current.next;
    }
    l2 = l2.next
  }
  if (carry) {
      current.next = new ListNode(carry)
  }
  return head
};

console.log(addTwoNumbers([2, 4, 3], [5, 6, 4]));

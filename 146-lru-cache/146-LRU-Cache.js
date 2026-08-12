function TreeNode(key, value, next, prev) {
    this.key = key;
    this.value = value;
    this.next = next;
    this.prev = prev;
}

var LRUCache = function(capacity) {
    this.map = {};
    this.head = null;
    this.tail = null;
    this.cap = capacity;
    this.size = 0;
};

LRUCache.prototype.get = function(key) {
    if (this.map[key] === undefined) {
        return -1;
    }

    let cur = this.map[key];

    if (cur === this.head) {
        return cur.value;
    }

    if (cur === this.tail) {
        this.tail = cur.prev;
    }

    cur.prev.next = cur.next;

    if (cur.next) {
        cur.next.prev = cur.prev;
    }

    cur.prev = null;
    cur.next = this.head;
    this.head.prev = cur;
    this.head = cur;

    return cur.value;
};

LRUCache.prototype.put = function(key, value) {
    if (this.map[key] !== undefined) {
        this.map[key].value = value;
        this.get(key);
        return;
    }

    let node = new TreeNode(key, value, this.head, null);

    if (this.head) {
        this.head.prev = node;
    } else {
        this.tail = node;
    }

    this.head = node;
    this.map[key] = node;
    this.size++;

    if (this.size > this.cap) {
        let LRU = this.tail;

        this.tail = LRU.prev;

        if (this.tail) {
            this.tail.next = null;
        } else {
            this.head = null;
        }

        delete this.map[LRU.key];
        this.size--;
    }
};
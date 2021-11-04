(function () {
    String.prototype.ensureStart = function (str) {
        if (this.indexOf(str) != 0) {
            return str + this;
        }
        return this.toString();
    };

    String.prototype.ensureEnd = function (str) {
        if (this.lastIndexOf(str) != this.length - str.length) {
            return this + str;
        }
        return this.toString();
    };

    String.prototype.isEmpty = function () {
        if (this == '') {
            return true;
        } else {
            return false;
        }
    };

    String.prototype.truncate = function (n) {
        const toStr = this.toString();
        if (this.length <= n) {
            return toStr;
        } else if (n < 4) {
            return '.'.repeat(n);
        } else if (this.length >= n) {
            let words = toStr.split(' ');
            if (words.length == 1) {
                return toStr.substring(0, n - 3) + '...';
            } else {
                let result = '';

                for (let word of words) {
                    if (result.length + word.length <= n - 3) {
                        result += word + ' ';
                    } else {
                        return result.trim() + '...';
                    }
                }

                return result.trim() + '...';
            }
        }
    };

    String.format = function (str, ...params) {
        let result = str;
        for (let i = 0; i < params.length; i++) {
            result = result.replace(`{${i}}`, params[i]);
        }

        return result;
    };
})();

let str = 'my string';
str = str.ensureStart('my');
str = str.ensureStart('hello ');
str = str.truncate(15);
console.log(str);
str = str.truncate(14);
console.log(str);
str = str.truncate(8);
console.log(str);
str = str.truncate(4);
console.log(str);
str = str.truncate(2);
console.log(str);
str = String.format('The {0} fox',
  'quick', 'brown');
  console.log(str);
str = String.format('jumps {0} {1}',
  );

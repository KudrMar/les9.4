export default class CardType {
    constructor() {
        this.brands = [
            {
                alias: 'visa',
                name: 'Visa',
                codeName: 'CVV',
                codeLength: 3,
                gaps: [4, 8, 12],
                lengths: [16],
                pattern: /^4\d*$/
            },
            {
                alias: 'master',
                name: 'MasterCard',
                codeName: 'CVC',
                codeLength: 3,
                gaps: [4, 8, 12],
                lengths: [16],
                pattern: /^(5[1-5]|222[1-9]|2[3-6]|27[0-1]|2720)\d*$/
            },
            {
                alias: 'amex',
                name: 'American Express',
                codeName: 'CID',
                codeLength: 4,
                gaps: [4, 10],
                lengths: [15],
                pattern: /^3[47]\d*$/
            },
            {
                alias: 'discover',
                name: 'Discover',
                codeName: 'CID',
                codeLength: 3,
                gaps: [4, 8, 12],
                lengths: [16, 19],
                pattern: /^(6011|65|64[4-9])\d*$/
            },
            {
                alias: 'unionpay',
                name: 'UnionPay',
                codeName: 'CVN',
                codeLength: 3,
                gaps: [4, 8, 12],
                lengths: [16, 17, 18, 19],
                pattern: /^62[0-5]\d*$/
            },
            {
                alias: 'mir',
                name: 'MIR',
                codeName: 'CVC',
                codeLength: 3,
                gaps: [4, 8, 12],
                lengths: [16],
                pattern: /^22\d*$/
              }

        ]
    }

    getBrand(number) {
        var brands = []
        for (var i = 0; i < this.brands.length; i++) {
          if (this.brands[i].pattern.test(number)) brands.push(this.brands[i])
        }
        if (brands.length === 1) return brands[0]
        else return  {
            alias: '',
            name: '',
            codeName: '',
            codeLength: 0,
            gaps: [],
            lengths: [],
            pattern: ''
        }
      }


}
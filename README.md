## Looping List pada REACT JS List & Key

### Higher order function map()

    - Menampilkan List dengan map
    - key : menambahkan atrribut key pada react element itu dibutuhkan
    untuk membantu react mengidentifikasi item mana nih yang berubah,
    mana yang bertambah atau berkurang, mana yang akan dirender ulang .
    key harus unik dan biasanya menggunakan id, dan kalo tidak ada id
    biasanya menggunakan index(tidak direcomendasikan)

### Higher order function filter()

    - Memfilter data2 yang ada didalam array
    - pada baris ini : const num = number.map((n) => <li key={n.toString()}>{n}</li>) ,
      kita juga bisa tidak menggunakan index sebagai key, dikarenakan data pada array numbers tidak ada yang sama .

### Higher order function reduce()

    - Menggabungkan nilai menjadi satu/ istilahnya mengitung nilai
    - kita menggunakan variable numbers yang nilainnya kita total
    - kita menggunakan reduce , ada 2 buah parameter value & accumulator=acc di dalam reduce
      untuk mengakumulasi nilai pada numbers
    - total 30 adalah akumulasi/penjumlahan keseluruhan nilai pada numbers

### Method push(),pop(),shift(), splice(), & includes()

    - push() = menambahkan nilai pada array dari paling belakang
    - pop() = menghapus data dari paling belakang
    - shift() = menghapus data dari paling depan
    - splice() = menghapus data pada index tertentu
    - inludes() = mengecheck ada atau tidaknya data didalam array

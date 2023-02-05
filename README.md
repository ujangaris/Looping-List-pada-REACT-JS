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
    - pada baris ini : const num = number.map((n) => <li key={n.toString()}>{n}</li>) , kita juga bisa tidak menggunakan index sebagai key, dikarenakan data pada array numbers tidak ada yang sama .

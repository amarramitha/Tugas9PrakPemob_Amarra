Nama : Amarramitha

NIM : H1D022064

![LoginPage](login.png)

1. **Proses Login**

- Saat pengguna mengklik tombol "Sign In with Google", fungsi loginWithGoogle dipanggil.
- Aplikasi menggunakan isPlatform('capacitor') untuk mendeteksi apakah aplikasi berjalan di platform mobile (iOS/Android) atau web.

![PopUpLogin](logingugel.png)

2. **Proses Login dengan Google**

- Aplikasi membuat instance GoogleAuthProvider untuk otentikasi Google di Firebase.
- Dengan signInWithPopup, Firebase memunculkan popup Google login, di mana pengguna dapat login menggunakan akun Google mereka.
- Jika berhasil, Firebase mengembalikan objek result yang berisi data pengguna yang berhasil login.
- Setelah proses login berhasil (baik pada platform web atau mobile), result.user berisi informasi akun Google pengguna yang sedang login, seperti displayName (nama pengguna), email, photoURL (foto profil), dan lainnya.
- Data pengguna ini disimpan dalam variabel user, yang merupakan ref dengan tipe User dari Firebase, sehingga dapat diakses di seluruh aplikasi melalui store auth.

![Home](home.png)

3. **Navigasi ke Halaman Utama**

- Setelah login berhasil, aplikasi akan melakukan navigasi ke halaman utama (/home) menggunakan router.push("/home");.

![Profile](profile.png)

4. **Mengakses Nama Pengguna dan Profil**

- Setelah pengguna berhasil login, data pengguna dari akun Google disimpan dalam objek user.
- Objek ini berisi informasi akun, seperti displayName (nama pengguna) dan photoURL (URL foto profil), yang dapat diakses melalui user.value.displayName dan user.value.photoURL.
- Aplikasi dapat menggunakan informasi ini untuk menampilkan nama pengguna dan foto profil di berbagai halaman atau komponen.

5. **Logout**

Fungsi logout memungkinkan pengguna untuk keluar dari akun mereka. Ini menggunakan Firebase signOut untuk menghapus status autentikasi di Firebase. Di platform mobile (iOS/Android), GoogleAuth.signOut() juga dipanggil untuk membersihkan sesi Google. Setelah berhasil logout, aplikasi mengatur user menjadi null dan mengarahkan pengguna kembali ke halaman login (/login).

6. **Menjaga Status Autentikasi dengan onAuthStateChanged**

Dengan menggunakan onAuthStateChanged, aplikasi akan mendeteksi perubahan status autentikasi pengguna. Setiap kali status autentikasi Firebase berubah (misalnya, pengguna login atau logout), nilai user akan diperbarui. Hal ini memungkinkan aplikasi untuk menampilkan atau menyembunyikan konten berdasarkan status login pengguna.

7. **Proses Create**

![View](viewapp.png)

![Create](create.png)

Fungsi Utama: handleSubmit(todo)

Validasi Input: Memeriksa apakah input title kosong. Jika ya, menampilkan toast peringatan menggunakan showToast.
Tambah Todo Baru:
Jika editingId kosong (artinya tidak sedang mengedit), maka fungsi firestoreService.addTodo(todo) dipanggil untuk menambahkan todo baru.
Setelah berhasil, memuat ulang data todo dengan memanggil loadTodos().
Pesan Keberhasilan: Menampilkan toast notifikasi bahwa todo berhasil ditambahkan.
Komponen Input Modal:

Tombol tambah pada FAB (ion-fab-button) membuka modal input (InputModal).
Data dikirimkan melalui properti bind v-model dan event @submit.

8. **Proses Edit**

![Edit](edit.png)

![Update](update.png)

9. **Proses Delete**

![Delete](delete.png)
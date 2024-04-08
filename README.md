<h1>State Yönetimi</h1>

- State: Uygulamadaki bileşenlerimizin sahip olduğu bilgi ve özelliklerdir.

- Prop Drilling: Bileşenlerin tularıdan aşşağıya veri taşıması

- Context API: Uygulamadaki state'i, oluşturduğumuz merkezlerden yönettiğimiz state yönetim aracı.

- Redux: Bileşenlerin sahip olduğu ve merkezi olaarak tutulaması gereken state'lerin yönetildiği merkezi state yönetim aracı

<h1>Neden Redux</h1>
- Kod Tekrarını önler
- Performansı arttırır
- Bileşen içersindeki karışıklığı azaltır
- Hata ayıklama daha kolaydır.
- Orta ve büyük ölçekli projelerde state'i yönetimi daha kolay hale getirir.

<h1>Redux ile ilgili bilinmesi gerekenler</h1>

1- Store: Uygulamanın bütün bileşenleri tarfından erişlebilen ve yönetilebilen state deposudur

2- Reducer: Aksiyondan aldığı talimata göre store'da tutlan state'in nasıl değişeceğine karar veren fonksiyon.

3- Action: Store'daki state'i güncellemek için reducer'a gönderdiğimiz emir/haber.

- Action iki değere sahip bir objedir.
- type: Action'un görevini tanımlayan string ("TODO_EKLE")
- payload: Gönderilen eylemin verisi
  4- Dispatch (Sevketmek): Action gerçekleştiğini reducer'a haber veren method.

5- Subscribe (Abone Olma): Bileşenlerin store''da tutlan verilere erişimini sağlama(useContext, useSelector)

6- Provider (Sağlayıcı): Store'da tutulan verileri uygulamaya sağlar

<h1>Gerçek Hayattan Örnek</h1>

1- Store: Okulun binası.

2- Reducer: Okulun yönetim ekibi (Müdür,Müdür Yard.)

3- Action: Öğrencinin sınavı geçmesi / Yeni kayıt Yapması / Okuldan Atılması

4- Dispatch (Sevketmek): Sekreter / Nöbetçi Öğrenci / Öğretmen / Sınıf Annesi. Olayları bildirir.

5- Subscribe (Abone Olma): E-Okul. Veriler erişim sağlar

6- Provider (Sağlayıcı): Okuldaki organizyon veya hizmet sağlayıcı.

<h1>Redux Kurulum Aşamaları:</h1>

- redux react-redux paketlerini indir
- reducer/reducer'ların kurulumunu yap
- store'un kurulumunu yap
- store'u projeye tanıt

<h1>Altın Kural</h1>

- Verilerin api'dan geldiği senerayoda api istekleri başarılı olmadan store güncellememeliyiz.

- Ancak API isteği başarılı olduktan sonra store güncellenmeli

- Yani store'un güncellnmesi api isteğini sonucuna bağımlı olmalı
# redux_proje
# redux_project

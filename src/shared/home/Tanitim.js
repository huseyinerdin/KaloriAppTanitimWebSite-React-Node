import React from "react";

const Tanitim = () => {
  return (
    <div className="tanitim">
      <div className="tanitim-bilgi">
        <h2>Neden Kalori Takibi Yapmalıyım?</h2>
        <hr />
        <p>
          Sağlıklı bir yaşam için ön koşul doğru ve dengeli beslenmek. Beslenme konusuna detaylı bakacak olursak tükettiğimiz yiyeceklerin kalorisini
          bilmek ve aşırı kalori içeren işlenmiş gıdalardan kaçınmak bu dengeyi sağlamanın en kolay yollarından birisidir. Araştırmalar gösteriyor ki
          kalori takibini yapabilen insanlar daha fazla kalori harcamakla birlikte, kilolarını dengede tutmayı başarıyorlar.
        </p>
      </div>
      <div className="tanitim-bilgi">
        <h2>RUFIT Nedir?</h2>
        <hr />
        <p>
          Programımız, 18-25 yaş aralığında bulunan bireylerin günlük kalorilerini takip etmeleri amacıyla verilen ürünlerden öğünler listesi
          oluşturarak oluşturdukları öğünleri(kahvaltı, öğle yemeği, akşam yemeği, ara öğün) tüketerek aldıkları kalorileri takip eden ve aldıkları
          kalori bazında günlük rapor alabildikleri bir programdır. Programımız, kullanıcı bazlı olarak kişilerin giriş yaparak öğünlük oluşturdukları
          menülerin kalori hesaplamalarını yaparak, kişilerin öğünlük aldıkları kalorileri hesaplama işlemi yapıyor ve kişinin tercihine göre
          haftalık/aylık olarak kişiye aldıkları toplam kalori miktarını rapor olarak sunuyor. Ayrıca kullanıcının isteğine göre günlük aldığı
          kalorileri de günlük rapor bazında görebiliyor.
        </p>
      </div>
      <div className="tanitim-bilgi">
        <h2>Nasıl kullanabilirim?</h2>
        <hr />
        <p>
          Programımızı kullanabilmek için, ilk önce kişi ana ekranda açılan kayıt ol'a tıklayarak kendisine ait mail ile sisteme kayıt olması
          gerekmektedir. Gerekli koşulları sağlayıp kayıt işlemi tamamlandıktan sonra giriş yaparak açılan penceredeki yiyecek menülerinden seçim
          yaparak öğünlerini oluşturmalıdır daha sonra oluşturduğu bu öğünlerde değişiklik yapmak isterse aynı pencere üzerinden öğünlerini seçerek
          gerekli ürün değişikliklerini yapabilir. Kullanıcı günlük kalori raporunu menüden gün sonunda görüntüleyebilir dahası geçmiş zamanda tutulan
          kalori raporunu görüntülemek istediği tarihi seçerek o tarihe ait verilerini görüntüleyebilir.
        </p>
      </div>
    </div>
  );
};

export default Tanitim;

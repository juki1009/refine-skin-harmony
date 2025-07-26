import { MapPin, Clock, Phone, Car } from "lucide-react";
import { Button } from "@/components/ui/button";

const LocationSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            アクセス・<span className="text-primary">店舗情報</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            駅から徒歩圏内の好立地。お気軽にお越しください。
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* 店舗情報 */}
          <div className="space-y-8">
            <div className="bg-card rounded-xl p-8 shadow-soft">
              <h3 className="text-2xl font-bold text-primary mb-6">店舗情報</h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <MapPin className="w-6 h-6 text-primary mt-1 mr-4 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">住所</h4>
                    <p className="text-muted-foreground">
                      〒100-0001<br />
                      東京都千代田区千代田1-1-1<br />
                      千代田ビル 3F
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Clock className="w-6 h-6 text-primary mt-1 mr-4 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">営業時間</h4>
                    <p className="text-muted-foreground">
                      平日: 10:00 - 21:00<br />
                      土日祝: 9:00 - 19:00<br />
                      <span className="text-destructive">定休日: 毎週水曜日</span>
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Phone className="w-6 h-6 text-primary mt-1 mr-4 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">電話番号</h4>
                    <p className="text-muted-foreground">
                      <a href="tel:03-1234-5678" className="hover:text-primary transition-colors">
                        03-1234-5678
                      </a>
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Car className="w-6 h-6 text-primary mt-1 mr-4 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">アクセス</h4>
                    <p className="text-muted-foreground">
                      JR東京駅 徒歩5分<br />
                      地下鉄大手町駅 徒歩3分<br />
                      近隣コインパーキング有り
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* 予約ボタン */}
            <div className="bg-gradient-hero rounded-xl p-8 text-center shadow-medium">
              <h4 className="text-xl font-bold text-primary-foreground mb-4">
                ご予約・お問い合わせ
              </h4>
              <p className="text-primary-foreground/90 mb-6">
                LINEで簡単予約、またはお電話でお気軽にどうぞ
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button variant="secondary" size="lg" className="flex-1">
                  LINEで予約
                </Button>
                <Button variant="outline" size="lg" className="flex-1 bg-white/10 border-white/20 text-white hover:bg-white/20">
                  電話で相談
                </Button>
              </div>
            </div>
          </div>

          {/* 地図 */}
          <div className="bg-card rounded-xl p-8 shadow-soft">
            <h3 className="text-2xl font-bold text-primary mb-6">地図</h3>
            <div className="bg-muted rounded-lg h-96 flex items-center justify-center">
              {/* Google Maps Embed would go here */}
              <div className="text-center">
                <MapPin className="w-16 h-16 text-primary mx-auto mb-4" />
                <p className="text-muted-foreground mb-4">
                  Google Mapsで詳細な地図をご確認いただけます
                </p>
                <Button variant="outline">
                  Google Mapsで見る
                </Button>
              </div>
            </div>
            
            <div className="mt-6 p-4 bg-accent/20 rounded-lg">
              <p className="text-sm text-muted-foreground">
                <strong>目印:</strong> 1階にコンビニがある千代田ビルの3階です。<br />
                <strong>駐車場:</strong> 専用駐車場はございませんが、徒歩1分圏内に複数のコインパーキングがございます。
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationSection;
import { MapPin, Phone, Clock, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8">
          {/* ブランド情報 */}
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold mb-4">Refine</h3>
            <p className="text-primary-foreground/80 mb-4 leading-relaxed">
              清潔感があなたの自信に。男女対応の都度払い脱毛サロン。<br />
              完全個室でプライベートな空間をご提供いたします。
            </p>
            <div className="text-primary-foreground/60 text-sm">
              © 2024 Refine. All rights reserved.
            </div>
          </div>

          {/* 店舗情報 */}
          <div>
            <h4 className="font-semibold mb-4">店舗情報</h4>
            <div className="space-y-3 text-sm text-primary-foreground/80">
              <div className="flex items-start">
                <MapPin className="w-4 h-4 mt-0.5 mr-2 flex-shrink-0" />
                <div>
                  東京都千代田区千代田1-1-1<br />
                  千代田ビル 3F
                </div>
              </div>
              <div className="flex items-start">
                <Phone className="w-4 h-4 mt-0.5 mr-2 flex-shrink-0" />
                <a href="tel:03-1234-5678" className="hover:text-white transition-colors">
                  03-1234-5678
                </a>
              </div>
              <div className="flex items-start">
                <Clock className="w-4 h-4 mt-0.5 mr-2 flex-shrink-0" />
                <div>
                  平日 10:00-21:00<br />
                  土日祝 9:00-19:00
                </div>
              </div>
            </div>
          </div>

          {/* メニュー・リンク */}
          <div>
            <h4 className="font-semibold mb-4">メニュー</h4>
            <div className="space-y-2 text-sm text-primary-foreground/80">
              <div><a href="#" className="hover:text-white transition-colors">男性メニュー</a></div>
              <div><a href="#" className="hover:text-white transition-colors">女性メニュー</a></div>
              <div><a href="#" className="hover:text-white transition-colors">料金表</a></div>
              <div><a href="#" className="hover:text-white transition-colors">よくある質問</a></div>
              <div><a href="#" className="hover:text-white transition-colors">お客様の声</a></div>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-primary-foreground/60">
            <div className="mb-4 md:mb-0">
              <a href="#" className="hover:text-primary-foreground/80 transition-colors mr-6">プライバシーポリシー</a>
              <a href="#" className="hover:text-primary-foreground/80 transition-colors">利用規約</a>
            </div>
            <div>
              JR東京駅徒歩5分 | 地下鉄大手町駅徒歩3分
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";

const PricingSection = () => {
  const maleMenus = [
    {
      name: "ヒゲ脱毛",
      normalPrice: "6,000円",
      initialPrice: "3,000円",
      description: "鼻下・顎・顎下",
      features: ["痛み軽減", "青髭解消", "清潔感アップ"]
    },
    {
      name: "全身脱毛",
      normalPrice: "14,000円",
      initialPrice: "7,000円",
      description: "VIO除く",
      features: ["全身スッキリ", "自己処理不要", "時短効果"]
    },
    {
      name: "部分脱毛",
      normalPrice: "4,000円",
      initialPrice: "2,000円",
      description: "腕・足・胸など",
      features: ["気になる部位", "お試し最適", "リーズナブル"]
    }
  ];

  const femaleMenus = [
    {
      name: "VIO脱毛",
      normalPrice: "10,000円",
      initialPrice: "5,000円",
      description: "デリケートゾーン",
      features: ["完全個室", "女性スタッフ", "衛生的"]
    },
    {
      name: "全身脱毛",
      normalPrice: "16,000円",
      initialPrice: "8,000円",
      description: "VIO除く",
      features: ["全身美肌", "自己処理不要", "時短効果"]
    },
    {
      name: "部分脱毛",
      normalPrice: "3,000円",
      initialPrice: "1,500円",
      description: "ワキ・腕・足など",
      features: ["気になる部位", "お試し最適", "お手軽価格"]
    }
  ];

  return (
    <section className="py-20 bg-gradient-soft">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            明確な<span className="text-primary">料金体系</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            都度払いで安心。初回は50%OFFでお試しいただけます。
          </p>
        </div>

        {/* 初回体験特典 */}
        <div className="bg-gradient-hero rounded-2xl p-8 md:p-12 text-center mb-16 shadow-glow">
          <h3 className="text-3xl font-bold text-primary-foreground mb-4">
            🎉 初回体験特典 🎉
          </h3>
          <p className="text-xl text-primary-foreground/90 mb-6">
            すべてのメニューが<span className="text-2xl font-bold">50%OFF</span>
          </p>
          <p className="text-primary-foreground/80 mb-6">
            無料カウンセリング + パッチテスト付き
          </p>
          <Button variant="secondary" size="lg" className="text-lg px-8">
            今すぐ予約する
          </Button>
        </div>

        {/* 男性料金 */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-center mb-8 text-primary">
            男性メニュー料金
          </h3>
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {maleMenus.map((menu, index) => (
              <div key={index} className="bg-card rounded-xl p-6 shadow-soft hover:shadow-medium transition-all duration-300">
                <div className="text-center mb-6">
                  <h4 className="text-xl font-bold text-primary mb-2">{menu.name}</h4>
                  <p className="text-muted-foreground text-sm mb-4">{menu.description}</p>
                  
                  <div className="mb-4">
                    <div className="text-sm text-muted-foreground line-through">
                      通常価格: {menu.normalPrice}
                    </div>
                    <div className="text-2xl font-bold text-secondary-foreground">
                      初回: {menu.initialPrice}
                    </div>
                  </div>
                </div>
                
                <div className="space-y-3 mb-6">
                  {menu.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center text-sm">
                      <CheckCircle className="w-4 h-4 text-secondary mr-2" />
                      {feature}
                    </div>
                  ))}
                </div>
                
                <Button variant="outline" className="w-full">
                  詳細を見る
                </Button>
              </div>
            ))}
          </div>
        </div>

        {/* 女性料金 */}
        <div>
          <h3 className="text-2xl font-bold text-center mb-8 text-primary">
            女性メニュー料金
          </h3>
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {femaleMenus.map((menu, index) => (
              <div key={index} className="bg-card rounded-xl p-6 shadow-soft hover:shadow-medium transition-all duration-300">
                <div className="text-center mb-6">
                  <h4 className="text-xl font-bold text-primary mb-2">{menu.name}</h4>
                  <p className="text-muted-foreground text-sm mb-4">{menu.description}</p>
                  
                  <div className="mb-4">
                    <div className="text-sm text-muted-foreground line-through">
                      通常価格: {menu.normalPrice}
                    </div>
                    <div className="text-2xl font-bold text-accent-pink-foreground">
                      初回: {menu.initialPrice}
                    </div>
                  </div>
                </div>
                
                <div className="space-y-3 mb-6">
                  {menu.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center text-sm">
                      <CheckCircle className="w-4 h-4 text-accent-pink mr-2" />
                      {feature}
                    </div>
                  ))}
                </div>
                
                <Button variant="pink" className="w-full">
                  詳細を見る
                </Button>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 text-center">
          <div className="bg-background/80 rounded-xl p-6 inline-block shadow-soft">
            <p className="text-sm text-muted-foreground mb-2">
              ✓ 都度払い対応 ✓ コース契約不要 ✓ 追加料金なし
            </p>
            <p className="text-sm text-muted-foreground">
              ※ 価格は全て税込表示です
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
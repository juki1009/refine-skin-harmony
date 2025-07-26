import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const MenuSection = () => {
  const maleMenus = [
    {
      name: "ヒゲ脱毛",
      description: "鼻下・顎・顎下・頬など",
      features: ["痛みを最小限に抑制", "青髭解消", "清潔感アップ"],
      price: "3,000円〜"
    },
    {
      name: "全身脱毛",
      description: "顔・VIO含む/除く選択可",
      features: ["体毛の悩みを一気に解決", "自己処理不要", "清潔な肌へ"],
      price: "7,000円〜"
    },
    {
      name: "部分脱毛",
      description: "腕・足・胸・背中など",
      features: ["気になる部位だけ", "リーズナブルな価格", "短時間で完了"],
      price: "2,000円〜"
    }
  ];

  const femaleMenus = [
    {
      name: "VIO脱毛",
      description: "デリケートゾーン",
      features: ["完全個室で安心", "経験豊富な女性スタッフ", "衛生的で快適"],
      price: "5,000円〜"
    },
    {
      name: "全身脱毛",
      description: "顔・VIO含む/除く選択可",
      features: ["全身ツルツル美肌", "自己処理から解放", "時短効果"],
      price: "8,000円〜"
    },
    {
      name: "部分脱毛",
      description: "ワキ・腕・足など",
      features: ["気になる部位だけ", "お試しにも最適", "リーズナブル"],
      price: "1,500円〜"
    }
  ];

  return (
    <section className="py-20 bg-gradient-soft">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            脱毛<span className="text-primary">メニュー</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            男女それぞれに最適なメニューをご用意。都度払いで気軽にお試しいただけます。
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Tabs defaultValue="male" className="w-full">
            <TabsList className="grid w-full grid-cols-2 mb-8">
              <TabsTrigger value="male" className="text-lg py-3">
                男性メニュー
              </TabsTrigger>
              <TabsTrigger value="female" className="text-lg py-3">
                女性メニュー
              </TabsTrigger>
            </TabsList>
            
            <TabsContent value="male" className="space-y-6">
              {maleMenus.map((menu, index) => (
                <div key={index} className="bg-card rounded-xl p-8 shadow-soft hover:shadow-medium transition-all duration-300">
                  <div className="grid md:grid-cols-3 gap-6 items-center">
                    <div>
                      <h3 className="text-2xl font-bold text-primary mb-2">{menu.name}</h3>
                      <p className="text-muted-foreground mb-4">{menu.description}</p>
                      <div className="text-2xl font-bold text-secondary-foreground">
                        {menu.price}
                      </div>
                    </div>
                    
                    <div className="md:col-span-2">
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-6">
                        {menu.features.map((feature, featureIndex) => (
                          <div key={featureIndex} className="flex items-center text-sm">
                            <div className="w-2 h-2 bg-secondary rounded-full mr-2"></div>
                            {feature}
                          </div>
                        ))}
                      </div>
                      <Button variant="outline" className="w-full md:w-auto">
                        詳細を見る
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </TabsContent>
            
            <TabsContent value="female" className="space-y-6">
              {femaleMenus.map((menu, index) => (
                <div key={index} className="bg-card rounded-xl p-8 shadow-soft hover:shadow-medium transition-all duration-300">
                  <div className="grid md:grid-cols-3 gap-6 items-center">
                    <div>
                      <h3 className="text-2xl font-bold text-primary mb-2">{menu.name}</h3>
                      <p className="text-muted-foreground mb-4">{menu.description}</p>
                      <div className="text-2xl font-bold text-accent-pink-foreground">
                        {menu.price}
                      </div>
                    </div>
                    
                    <div className="md:col-span-2">
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-6">
                        {menu.features.map((feature, featureIndex) => (
                          <div key={featureIndex} className="flex items-center text-sm">
                            <div className="w-2 h-2 bg-accent-pink rounded-full mr-2"></div>
                            {feature}
                          </div>
                        ))}
                      </div>
                      <Button variant="pink" className="w-full md:w-auto">
                        詳細を見る
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </section>
  );
};

export default MenuSection;
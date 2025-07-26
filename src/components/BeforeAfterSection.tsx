import beforeAfterImage from "@/assets/before-after.jpg";

const BeforeAfterSection = () => {
  const results = [
    {
      area: "ヒゲ脱毛",
      period: "6回施術後",
      description: "毎日のヒゲ剃りから解放され、清潔感のある印象に"
    },
    {
      area: "全身脱毛",
      period: "8回施術後",
      description: "ムダ毛処理の時間が大幅短縮、美しい肌に"
    },
    {
      area: "VIO脱毛",
      period: "5回施術後",
      description: "デリケートゾーンも安心、快適な毎日に"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            施術<span className="text-primary">効果</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            実際の施術による変化をご確認ください。継続的な施術で理想の肌を実現できます。
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Before/After Image */}
          <div className="bg-card rounded-2xl p-8 shadow-medium mb-12">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-primary mb-4">Before / After</h3>
            </div>
            
            <div className="relative">
              <img 
                src={beforeAfterImage} 
                alt="施術前後の比較" 
                className="w-full rounded-xl shadow-soft"
              />
              <div className="absolute inset-0 flex">
                <div className="w-1/2 flex items-center justify-center">
                  <div className="bg-background/90 px-6 py-3 rounded-full shadow-medium">
                    <span className="font-bold text-destructive">Before</span>
                  </div>
                </div>
                <div className="w-1/2 flex items-center justify-center">
                  <div className="bg-background/90 px-6 py-3 rounded-full shadow-medium">
                    <span className="font-bold text-primary">After</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Results Grid */}
          <div className="grid md:grid-cols-3 gap-6">
            {results.map((result, index) => (
              <div key={index} className="text-center">
                <div className="bg-gradient-hero rounded-xl p-6 shadow-soft mb-4">
                  <h4 className="text-xl font-bold text-primary-foreground mb-2">
                    {result.area}
                  </h4>
                  <div className="text-primary-foreground/90 font-semibold">
                    {result.period}
                  </div>
                </div>
                <p className="text-muted-foreground">
                  {result.description}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <div className="bg-accent/20 rounded-xl p-6 inline-block">
              <p className="text-sm text-muted-foreground mb-2">
                ※ 効果には個人差があります
              </p>
              <p className="text-sm text-muted-foreground">
                ※ 施術回数は毛質・毛量により異なります
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BeforeAfterSection;
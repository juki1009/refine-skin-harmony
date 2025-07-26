const ProblemsSection = () => {
  const maleProblems = [
    {
      title: "毎日のヒゲ剃りが面倒",
      description: "忙しい朝の時間を節約したい"
    },
    {
      title: "青髭が気になる",
      description: "清潔感のある印象を与えたい"
    },
    {
      title: "体毛が濃くて悩んでいる",
      description: "胸毛・手足の毛などが気になる"
    }
  ];

  const femaleProblems = [
    {
      title: "自己処理で肌を傷めてしまう",
      description: "カミソリ負けや埋没毛に悩んでいる"
    },
    {
      title: "ムダ毛処理の時間が負担",
      description: "毎日のお手入れから解放されたい"
    },
    {
      title: "VIOゾーンの処理が難しい",
      description: "デリケートな部分を安全に処理したい"
    }
  ];

  return (
    <section className="py-20 bg-gradient-soft">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            こんな<span className="text-primary">お悩み</span>ありませんか？
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            多くの方が抱える脱毛に関するお悩み。Refineが解決いたします。
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* 男性のお悩み */}
          <div className="bg-card rounded-xl p-8 shadow-soft">
            <div className="text-center mb-8">
              <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">👨</span>
              </div>
              <h3 className="text-2xl font-bold text-primary mb-2">男性のお悩み</h3>
            </div>
            
            <div className="space-y-6">
              {maleProblems.map((problem, index) => (
                <div key={index} className="p-4 bg-background/50 rounded-lg">
                  <h4 className="font-semibold text-foreground mb-2">{problem.title}</h4>
                  <p className="text-muted-foreground text-sm">{problem.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* 女性のお悩み */}
          <div className="bg-card rounded-xl p-8 shadow-soft">
            <div className="text-center mb-8">
              <div className="w-16 h-16 bg-accent-pink rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">👩</span>
              </div>
              <h3 className="text-2xl font-bold text-primary mb-2">女性のお悩み</h3>
            </div>
            
            <div className="space-y-6">
              {femaleProblems.map((problem, index) => (
                <div key={index} className="p-4 bg-background/50 rounded-lg">
                  <h4 className="font-semibold text-foreground mb-2">{problem.title}</h4>
                  <p className="text-muted-foreground text-sm">{problem.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemsSection;
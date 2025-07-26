import { CheckCircle, Shield, Users, Star, Clock, Heart } from "lucide-react";

const SolutionSection = () => {
  const features = [
    {
      icon: <Shield className="w-8 h-8" />,
      title: "最新の脱毛機器",
      description: "痛みが少なく、効果的な最新機器を使用。お肌に優しい施術をお約束します。",
      color: "bg-secondary"
    },
    {
      icon: <Star className="w-8 h-8" />,
      title: "豊富な実績",
      description: "お客様満足度95%以上。多くの方に選ばれている実績があります。",
      color: "bg-accent-pink"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "経験豊富なスタッフ",
      description: "男女スタッフが在籍。お客様一人ひとりに寄り添うカウンセリングを実施。",
      color: "bg-secondary"
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "完全個室",
      description: "男女別の完全個室でプライベートな空間。リラックスして施術を受けられます。",
      color: "bg-accent-pink"
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: "都度払いシステム",
      description: "高額なコース契約は不要。その都度お支払いいただけるので安心です。",
      color: "bg-secondary"
    },
    {
      icon: <CheckCircle className="w-8 h-8" />,
      title: "アフターケア充実",
      description: "施術後のケアまでしっかりサポート。美しい肌を長く保つお手伝いをします。",
      color: "bg-accent-pink"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Refineが選ばれる<span className="text-primary">理由</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            お客様のお悩みを解決するための充実したサービスと安心の環境をご提供しています。
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <div key={index} className="group">
              <div className="bg-card rounded-xl p-8 shadow-soft hover:shadow-medium transition-all duration-300 h-full">
                <div className={`w-16 h-16 ${feature.color} rounded-full flex items-center justify-center mb-6 text-primary group-hover:scale-110 transition-transform duration-300`}>
                  {feature.icon}
                </div>
                
                <h3 className="text-xl font-bold text-foreground mb-4">
                  {feature.title}
                </h3>
                
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gradient-hero rounded-2xl p-8 md:p-12 text-center shadow-medium">
          <h3 className="text-2xl md:text-3xl font-bold text-primary-foreground mb-4">
            安心・安全な施術をお約束
          </h3>
          <p className="text-primary-foreground/90 text-lg mb-6 max-w-2xl mx-auto">
            清潔な環境と高い技術力で、お客様に満足いただける施術を提供いたします。
            初めての方でも安心してお任せください。
          </p>
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;
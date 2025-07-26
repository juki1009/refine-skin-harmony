import { Star } from "lucide-react";
import customerWoman from "@/assets/customer-woman.jpg";
import customerMan from "@/assets/customer-man.jpg";

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "田中 美咲さん",
      age: "28歳",
      gender: "女性",
      image: customerWoman,
      treatment: "全身脱毛",
      rating: 5,
      comment: "自己処理による肌荒れに悩んでいましたが、Refineで全身脱毛を受けてから肌がとてもきれいになりました。完全個室で女性スタッフの方が丁寧に対応してくださり、初めてでも安心でした。都度払いなので自分のペースで通えるのも魅力です。",
      highlight: "肌荒れが改善され、自己処理から解放されました"
    },
    {
      name: "佐藤 健太さん",
      age: "32歳",
      gender: "男性",
      image: customerMan,
      treatment: "ヒゲ脱毛",
      rating: 5,
      comment: "毎朝のヒゲ剃りが面倒で青髭も気になっていました。Refineでヒゲ脱毛を始めてから、朝の準備時間が短縮され、肌も荒れなくなりました。男性でも利用しやすい雰囲気で、スタッフの方も親切でした。仕事での印象も良くなったと思います。",
      highlight: "青髭が解消され、清潔感がアップしました"
    }
  ];

  return (
    <section className="py-20 bg-gradient-soft">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            お客様の<span className="text-primary">声</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            実際にRefineをご利用いただいたお客様からの嬉しいお声をご紹介します。
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-card rounded-2xl p-8 shadow-medium hover:shadow-glow transition-all duration-300">
              {/* Header */}
              <div className="flex items-center mb-6">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full object-cover mr-4 shadow-soft"
                />
                <div>
                  <h3 className="text-xl font-bold text-primary">{testimonial.name}</h3>
                  <p className="text-muted-foreground text-sm">
                    {testimonial.age} • {testimonial.treatment}
                  </p>
                </div>
              </div>

              {/* Rating */}
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, starIndex) => (
                  <Star key={starIndex} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
                <span className="ml-2 text-sm text-muted-foreground">
                  {testimonial.rating}.0
                </span>
              </div>

              {/* Highlight */}
              <div className={`p-4 rounded-lg mb-6 ${
                testimonial.gender === '女性' ? 'bg-accent-pink/20' : 'bg-secondary/20'
              }`}>
                <p className="font-semibold text-primary text-sm">
                  💡 {testimonial.highlight}
                </p>
              </div>

              {/* Comment */}
              <blockquote className="text-muted-foreground leading-relaxed">
                "{testimonial.comment}"
              </blockquote>
            </div>
          ))}
        </div>

        {/* 満足度統計 */}
        <div className="mt-16 bg-gradient-hero rounded-2xl p-8 md:p-12 text-center shadow-medium">
          <h3 className="text-2xl md:text-3xl font-bold text-primary-foreground mb-6">
            お客様満足度
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="text-4xl md:text-5xl font-bold text-primary-foreground mb-2">
                95%
              </div>
              <div className="text-primary-foreground/90">
                総合満足度
              </div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-primary-foreground mb-2">
                98%
              </div>
              <div className="text-primary-foreground/90">
                リピート率
              </div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-primary-foreground mb-2">
                92%
              </div>
              <div className="text-primary-foreground/90">
                ご紹介率
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
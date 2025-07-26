import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQSection = () => {
  const commonFAQs = [
    {
      question: "脱毛は初めてですが大丈夫ですか？",
      answer: "はい、もちろんです。初回は必ず無料カウンセリングを行い、お客様の肌質や毛質を確認いたします。パッチテストも実施し、安全性を確認してから施術を開始いたします。不安なことがあれば何でもお気軽にご相談ください。"
    },
    {
      question: "痛みはありますか？",
      answer: "最新の脱毛機器を使用しており、従来の機器と比べて痛みを大幅に軽減しています。個人差はありますが、多くのお客様から「思っていたより痛くなかった」とのお声をいただいています。施術中も痛みの確認を行い、調整いたします。"
    },
    {
      question: "どのくらいの期間で効果が出ますか？",
      answer: "個人差がありますが、一般的に3〜5回の施術で効果を実感される方が多いです。完全に脱毛を完了するまでには8〜12回程度の施術が必要です。毛周期に合わせて1〜2ヶ月間隔での施術をおすすめしています。"
    },
    {
      question: "都度払いだけでも利用できますか？",
      answer: "はい、都度払いのみでもご利用いただけます。高額なコース契約は一切不要です。お客様のペースに合わせて通っていただけるのがRefineの特徴です。"
    }
  ];

  const maleFAQs = [
    {
      question: "男性のヒゲ脱毛は本当に効果がありますか？",
      answer: "はい、多くの男性にご満足いただいています。ヒゲは太く根深い毛ですが、適切な機器と技術により確実に効果を実感していただけます。青髭の解消や毎日のシェービングからの解放を実現できます。"
    },
    {
      question: "男性でも恥ずかしくないですか？",
      answer: "ご安心ください。男性のお客様も多く通われており、スタッフも慣れております。完全個室での施術ですので、他のお客様とお会いすることもありません。リラックスして施術を受けていただけます。"
    }
  ];

  const femaleFAQs = [
    {
      question: "VIO脱毛は恥ずかしくないですか？",
      answer: "VIO脱毛は経験豊富な女性スタッフが担当いたします。完全個室での施術で、お客様のプライバシーを最大限配慮しています。多くの女性がVIO脱毛を受けられており、スタッフも丁寧にサポートいたします。"
    },
    {
      question: "生理中でも施術できますか？",
      answer: "衛生面を考慮し、生理中のVIO脱毛はお控えいただいています。その他の部位（顔、腕、足など）は問題ありません。生理が予想される場合は、事前にご相談いただければ日程調整いたします。"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            よくある<span className="text-primary">質問</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            お客様からよくいただくご質問にお答えします。その他ご不明な点がございましたらお気軽にお問い合わせください。
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-12">
          {/* 共通FAQ */}
          <div>
            <h3 className="text-2xl font-bold text-primary mb-6 text-center">
              共通のご質問
            </h3>
            <Accordion type="single" collapsible className="space-y-4">
              {commonFAQs.map((faq, index) => (
                <AccordionItem key={index} value={`common-${index}`} className="bg-card rounded-xl shadow-soft px-6">
                  <AccordionTrigger className="text-left hover:text-primary">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>

          {/* 男性FAQ */}
          <div>
            <h3 className="text-2xl font-bold text-primary mb-6 text-center">
              男性からのご質問
            </h3>
            <Accordion type="single" collapsible className="space-y-4">
              {maleFAQs.map((faq, index) => (
                <AccordionItem key={index} value={`male-${index}`} className="bg-card rounded-xl shadow-soft px-6 border-l-4 border-secondary">
                  <AccordionTrigger className="text-left hover:text-primary">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>

          {/* 女性FAQ */}
          <div>
            <h3 className="text-2xl font-bold text-primary mb-6 text-center">
              女性からのご質問
            </h3>
            <Accordion type="single" collapsible className="space-y-4">
              {femaleFAQs.map((faq, index) => (
                <AccordionItem key={index} value={`female-${index}`} className="bg-card rounded-xl shadow-soft px-6 border-l-4 border-accent-pink">
                  <AccordionTrigger className="text-left hover:text-primary">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
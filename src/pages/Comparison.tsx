import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  TrendingUp, 
  TrendingDown,
  Calendar,
  Activity,
  Heart,
  Timer,
  Zap,
  ArrowRight,
  BarChart3,
  Target,
  CheckCircle2,
  AlertTriangle
} from "lucide-react";
import { Link } from "react-router-dom";

const Comparison = () => {
  // Mock data for comparison
  const trainingData = {
    session1: {
      date: "15 Jun 2024",
      type: "Corrida Intervalada",
      duration: "45:32",
      distance: "8.2km",
      pace: "5:33",
      avgHR: 162,
      maxHR: 178,
      tss: 85,
      rating: "excellent"
    },
    session2: {
      date: "08 Jun 2024", 
      type: "Corrida Intervalada",
      duration: "47:18",
      distance: "7.8km", 
      pace: "6:04",
      avgHR: 158,
      maxHR: 172,
      tss: 78,
      rating: "good"
    }
  };

  const getComparisonIcon = (value1, value2, isReverse = false) => {
    const improved = isReverse ? value1 < value2 : value1 > value2;
    return improved ? 
      <TrendingUp className="w-4 h-4 text-chart-excellent" /> : 
      <TrendingDown className="w-4 h-4 text-chart-poor" />;
  };

  const getComparisonColor = (value1, value2, isReverse = false) => {
    const improved = isReverse ? value1 < value2 : value1 > value2;
    return improved ? "text-chart-excellent" : "text-chart-poor";
  };

  return (
    <div className="min-h-screen bg-background particles-bg">
      {/* Navigation */}
      <nav className="glass border-b border-primary/10 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-hero rounded-lg flex items-center justify-center">
                <Zap className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-foreground">SmartPeak</span>
            </Link>
            <div className="hidden md:flex items-center space-x-8">
              <Link to="/dashboard" className="text-muted-foreground hover:text-primary transition-colors">
                Dashboard
              </Link>
              <Link to="/training" className="text-muted-foreground hover:text-primary transition-colors">
                Treinos
              </Link>
              <Link to="/insights" className="text-muted-foreground hover:text-primary transition-colors">
                Insights
              </Link>
              <Link to="/profile" className="text-muted-foreground hover:text-primary transition-colors">
                Perfil
              </Link>
            </div>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-foreground mb-2">Comparativo de Treinos</h1>
          <p className="text-muted-foreground">Análise gráfica de progresso entre sessões selecionadas</p>
        </div>

        {/* Session Selection */}
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <Card className="performance-card">
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle className="text-lg">Sessão Atual</CardTitle>
                  <CardDescription>{trainingData.session1.date}</CardDescription>
                </div>
                <div className="px-3 py-1 bg-chart-excellent/10 text-chart-excellent text-sm font-medium rounded-full">
                  Mais Recente
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <Activity className="w-4 h-4 text-primary" />
                  <span className="font-medium">{trainingData.session1.type}</span>
                </div>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <span className="text-muted-foreground">Duração:</span>
                    <span className="ml-2 font-medium">{trainingData.session1.duration}</span>
                  </div>
                  <div>
                    <span className="text-muted-foreground">Distância:</span>
                    <span className="ml-2 font-medium">{trainingData.session1.distance}</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="performance-card">
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle className="text-lg">Sessão Anterior</CardTitle>
                  <CardDescription>{trainingData.session2.date}</CardDescription>
                </div>
                <Button variant="glass" size="sm">
                  <Calendar className="w-4 h-4" />
                  Trocar
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <Activity className="w-4 h-4 text-primary" />
                  <span className="font-medium">{trainingData.session2.type}</span>
                </div>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <span className="text-muted-foreground">Duração:</span>
                    <span className="ml-2 font-medium">{trainingData.session2.duration}</span>
                  </div>
                  <div>
                    <span className="text-muted-foreground">Distância:</span>
                    <span className="ml-2 font-medium">{trainingData.session2.distance}</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Comparison Chart */}
          <div className="lg:col-span-2 space-y-6">
            {/* Performance Metrics Comparison */}
            <Card className="performance-card">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <BarChart3 className="w-5 h-5 text-primary" />
                  Análise Comparativa de Performance
                </CardTitle>
                <CardDescription>
                  Métricas chave entre as duas sessões selecionadas
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {/* Pace Comparison */}
                  <div className="p-4 bg-primary/5 rounded-lg">
                    <div className="flex items-center justify-between mb-3">
                      <h4 className="font-medium text-foreground flex items-center gap-2">
                        <Timer className="w-4 h-4" />
                        Pace Médio
                      </h4>
                      <div className="flex items-center gap-2">
                        {getComparisonIcon(533, 604, true)}
                        <span className={`font-bold ${getComparisonColor(533, 604, true)}`}>
                          +31s melhoria
                        </span>
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="text-center p-3 bg-chart-excellent/10 rounded-lg">
                        <div className="text-xl font-bold text-chart-excellent">5:33</div>
                        <div className="text-sm text-muted-foreground">Atual</div>
                      </div>
                      <div className="text-center p-3 bg-chart-good/10 rounded-lg">
                        <div className="text-xl font-bold text-chart-good">6:04</div>
                        <div className="text-sm text-muted-foreground">Anterior</div>
                      </div>
                    </div>
                  </div>

                  {/* Heart Rate Comparison */}
                  <div className="p-4 bg-primary/5 rounded-lg">
                    <div className="flex items-center justify-between mb-3">
                      <h4 className="font-medium text-foreground flex items-center gap-2">
                        <Heart className="w-4 h-4" />
                        Frequência Cardíaca
                      </h4>
                      <div className="flex items-center gap-2">
                        {getComparisonIcon(162, 158)}
                        <span className={`font-bold ${getComparisonColor(162, 158)}`}>
                          +4 bpm
                        </span>
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="text-center p-3 bg-chart-good/10 rounded-lg">
                        <div className="text-xl font-bold text-chart-good">162</div>
                        <div className="text-sm text-muted-foreground">FC Média Atual</div>
                      </div>
                      <div className="text-center p-3 bg-chart-average/10 rounded-lg">
                        <div className="text-xl font-bold text-chart-average">158</div>
                        <div className="text-sm text-muted-foreground">FC Média Anterior</div>
                      </div>
                    </div>
                  </div>

                  {/* Distance & TSS */}
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="p-4 bg-primary/5 rounded-lg">
                      <div className="flex items-center justify-between mb-3">
                        <h4 className="font-medium text-foreground">Distância</h4>
                        <span className="text-chart-excellent font-bold">+0.4km</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-2xl font-bold text-chart-excellent">8.2km</span>
                        <span className="text-muted-foreground">vs 7.8km</span>
                      </div>
                    </div>

                    <div className="p-4 bg-primary/5 rounded-lg">
                      <div className="flex items-center justify-between mb-3">
                        <h4 className="font-medium text-foreground">TSS</h4>
                        <span className="text-chart-excellent font-bold">+7 pontos</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-2xl font-bold text-chart-excellent">85</span>
                        <span className="text-muted-foreground">vs 78</span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Detailed Progress Analysis */}
            <Card className="performance-card">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <TrendingUp className="w-5 h-5 text-primary" />
                  Análise Detalhada de Progresso
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Improvements */}
                <div className="space-y-3">
                  <h4 className="font-medium text-chart-excellent flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4" />
                    Progressos Identificados
                  </h4>
                  <div className="grid gap-3">
                    <div className="p-3 bg-chart-excellent/10 border border-chart-excellent/20 rounded-lg">
                      <div className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-chart-excellent rounded-full mt-2"></div>
                        <div>
                          <p className="font-medium text-chart-excellent">Eficiência Melhorada</p>
                          <p className="text-sm text-muted-foreground">
                            Pace 8.5% mais rápido com apenas 2.5% de aumento na FC média
                          </p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="p-3 bg-chart-excellent/10 border border-chart-excellent/20 rounded-lg">
                      <div className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-chart-excellent rounded-full mt-2"></div>
                        <div>
                          <p className="font-medium text-chart-excellent">Resistência Aprimorada</p>
                          <p className="text-sm text-muted-foreground">
                            Manteve intensidade por 400m adicionais sem fadiga significativa
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="p-3 bg-chart-excellent/10 border border-chart-excellent/20 rounded-lg">
                      <div className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-chart-excellent rounded-full mt-2"></div>
                        <div>
                          <p className="font-medium text-chart-excellent">Recuperação Mais Rápida</p>
                          <p className="text-sm text-muted-foreground">
                            FC retornou 15% mais rápido aos níveis base entre intervalos
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Areas for improvement */}
                <div className="space-y-3">
                  <h4 className="font-medium text-chart-average flex items-center gap-2">
                    <AlertTriangle className="w-4 h-4" />
                    Oportunidades de Melhoria
                  </h4>
                  <div className="p-3 bg-chart-average/10 border border-chart-average/20 rounded-lg">
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-chart-average rounded-full mt-2"></div>
                      <div>
                        <p className="font-medium text-chart-average">Consistência de Ritmo</p>
                        <p className="text-sm text-muted-foreground">
                          Variação do pace ainda 12% acima do ideal nos últimos 2km
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Progress Summary */}
            <Card className="performance-card">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Target className="w-5 h-5 text-primary" />
                  Resumo do Progresso
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="text-center p-4 bg-chart-excellent/10 rounded-lg">
                  <div className="text-3xl font-bold text-chart-excellent mb-1">+12%</div>
                  <div className="text-sm text-muted-foreground">Melhoria Global</div>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">Velocidade</span>
                    <span className="text-sm font-medium text-chart-excellent">+8.5%</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">Eficiência</span>
                    <span className="text-sm font-medium text-chart-excellent">+15%</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">Resistência</span>
                    <span className="text-sm font-medium text-chart-good">+7%</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">Consistência</span>
                    <span className="text-sm font-medium text-chart-average">-3%</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Next Steps */}
            <Card className="performance-card">
              <CardHeader>
                <CardTitle>Próximos Passos</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <h5 className="font-medium text-primary mb-1">Manter Progresso</h5>
                  <p className="text-sm text-muted-foreground">
                    Continue com intervalos 2x/semana, aumentando 5% a distância
                  </p>
                </div>

                <div className="p-3 bg-chart-average/10 rounded-lg">
                  <h5 className="font-medium text-chart-average mb-1">Trabalhar Consistência</h5>
                  <p className="text-sm text-muted-foreground">
                    Adicione 1 treino de tempo por semana para melhorar controle de ritmo
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <Card className="performance-card">
              <CardHeader>
                <CardTitle>Ações Rápidas</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button variant="performance" className="w-full justify-start">
                  <Calendar className="w-4 h-4" />
                  Comparar Outras Sessões
                </Button>
                
                <Button variant="glass" className="w-full justify-start">
                  <TrendingUp className="w-4 h-4" />
                  Exportar Análise
                </Button>
                
                <Link to="/insights">
                  <Button variant="glass" className="w-full justify-start">
                    <Target className="w-4 h-4" />
                    Ver Insights Semanais
                    <ArrowRight className="w-4 h-4 ml-auto" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Comparison;
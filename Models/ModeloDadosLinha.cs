namespace site.Models
{
    public class ModeloDadosLinha
    {
        public string NomeLinha { get; set; }

        public double Latitude { get; set; }

        public double Longitude { get; set; }

        public string CorLinha { get; set; }

    }

    public class ModeloInfoLinha
    {
        public string idLinha { get; set; }
        public string NomeLinha { get; set; }
    }

    public class ModeloBuscaLinha
    {
        public string idLinha { get; set; }

        public string NomeLinha { get; set; }

        public double MediaPassageiros { get; set; }

        public double MediaPassageirosPagantes { get; set; }

        public double MediaGratuidade { get; set; }

        public double MediaPagEstudante { get; set; }
    }
}


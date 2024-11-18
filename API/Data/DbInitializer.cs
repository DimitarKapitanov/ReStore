using API.Entities;

namespace API.Data
{
    public static class DbInitializer
    {
        public static void Initialize(StoreContext context)
        {
            if (context.Products.Any()) return;

            var products = new List<Product>{
                        new Product
                {
                    Id = Guid.NewGuid(),
                    Name = "Angular Speedster Board 2000",
                    Description =
                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur erat mi, imperdiet et laoreet sed, dapibus id velit. Curabitur semper nibh orci, quis elementum mauris accumsan eu. Vivamus nec eros dapibus, ornare justo eget, imperdiet erat. Mauris ut arcu at nulla finibus fermentum. Curabitur sagittis quam maximus mauris viverra ornare. Integer ac libero at elit hendrerit laoreet id gravida elit. Fusce ipsum neque, tincidunt sit amet dignissim non, consequat ultricies sapien. Mauris sed eros vel nulla pretium imperdiet. Maecenas iaculis ante quis efficitur consequat. Praesent placerat id neque placerat tincidunt. Morbi non viverra leo. Donec commodo non sem nec hendrerit. Cras at consectetur felis, nec imperdiet felis. Nam id gravida nibh.Quisque purus ex, cursus vel varius vel, ullamcorper facilisis lectus. Pellentesque urna turpis, posuere a ante sit amet, tincidunt interdum nulla. Maecenas semper aliquet metus non ultrices. Quisque facilisis ligula sed diam auctor, sed dictum tellus gravida. Nam metus massa, tincidunt ut magna eget, ultricies venenatis lacus. Donec pretium vulputate laoreet. Nulla ac efficitur leo. Aenean volutpat aliquam mi eu pharetra. Vivamus vitae nulla quis felis mollis aliquam at vitae erat. Quisque neque arcu, placerat et consequat vitae, hendrerit a diam. Suspendisse id tincidunt augue, efficitur consectetur leo. Vestibulum vel dictum libero. Morbi congue mattis aliquet. Nam sed placerat justo, non lacinia lacus. Nulla porta efficitur magna, non sagittis ipsum auctor non. Lorem ipsum dolor sit amet, consectetur adipiscing elit.Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Morbi pellentesque, sem vitae auctor feugiat, velit ante aliquet lorem, pulvinar scelerisque odio enim quis quam. Aenean convallis dui finibus lacus lacinia luctus. Maecenas felis nisi, placerat in turpis id, fermentum gravida mi. Suspendisse posuere erat ex, sed pellentesque tellus egestas ac. Aliquam luctus ultricies orci sed pellentesque. In luctus enim quis semper posuere.Curabitur tincidunt mattis nibh, sit amet fringilla nulla vehicula id. Donec sed elit in massa pharetra fermentum. Praesent consequat, enim et accumsan viverra, nibh ante euismod nibh, in mattis odio neque pretium ligula. Morbi risus magna, tincidunt quis eros eu, rhoncus gravida metus. Sed id enim ut quam dignissim efficitur ac ac enim. Nulla vitae arcu tellus. Curabitur sollicitudin sed ligula eu venenatis. Cras rhoncus dictum suscipit. Mauris orci ligula, finibus vitae libero eu, laoreet molestie tellus. In at lacus accumsan, pulvinar nisl id, tristique quam.Maecenas porta rhoncus lorem ac laoreet. Nullam viverra enim in magna tincidunt finibus lobortis at felis. Sed lectus nunc, vestibulum at sapien ut, convallis vehicula lacus. Donec sapien velit, hendrerit lacinia nisi at, interdum convallis augue. Donec sollicitudin tincidunt quam, id tristique justo. Proin suscipit arcu ac nunc hendrerit varius. Ut elit velit, aliquet in est vel, iaculis condimentum velit. Donec pharetra commodo tristique. In hac habitasse platea dictumst. Aenean condimentum laoreet sem, et maximus mi vulputate a. Duis eget purus fringilla, pharetra arcu quis, iaculis dui. Nunc pretium, nisl sed euismod blandit, ligula elit aliquam ante, vel viverra libero urna in massa. Cras cursus congue metus ut laoreet.Pellentesque eget quam ultricies, suscipit lorem sit amet, pharetra metus. Aenean ornare placerat vulputate. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut sed nisi hendrerit, viverra ligula a, vestibulum lectus. Nullam tincidunt turpis id libero efficitur interdum. Etiam lobortis iaculis tincidunt. Fusce a enim dapibus, cursus diam et, elementum urna. Cras quam nibh, sagittis eget mattis eget, sodales non quam. Phasellus pretium odio eget sem convallis tempus. Donec mauris ante, pretium ac pellentesque ac, consectetur sed turpis. Aliquam ultrices, nisl id placerat bibendum, tellus ipsum porttitor felis, vitae pharetra est justo eget sem. Praesent a mi metus.Proin venenatis faucibus congue. Ut eget arcu non ex bibendum tempus. Sed vel fringilla metus, at ultricies risus. Mauris interdum nibh a rhoncus faucibus. Morbi purus metus, elementum in porttitor et, cursus at nulla. Nunc at ligula fringilla, imperdiet tortor id, fringilla sapien. Aliquam lobortis volutpat arcu, euismod venenatis ipsum aliquet nec. ",
                    Price = 20000,
                    PictureUrl = "/images/products/sb-ang1.png",
                    Brand = "Angular",
                    Type = "Boards",
                    QuantityInStock = 100
                },
                new Product
                {
                    Id = Guid.NewGuid(),
                    Name = "Green Angular Board 3000",
                    Description = "Nunc viverra imperdiet enim. Fusce est. Vivamus a tellus.",
                    Price = 15000,
                    PictureUrl = "/images/products/sb-ang2.png",
                    Brand = "Angular",
                    Type = "Boards",
                    QuantityInStock = 100
                },
                new Product
                {
                    Id = Guid.NewGuid(),
                    Name = "Core Board Speed Rush 3",
                    Description =
                        "Suspendisse dui purus, scelerisque at, vulputate vitae, pretium mattis, nunc. Mauris eget neque at sem venenatis eleifend. Ut nonummy.",
                    Price = 18000,
                    PictureUrl = "/images/products/sb-core1.png",
                    Brand = "NetCore",
                    Type = "Boards",
                    QuantityInStock = 100
                },
                new Product
                {
                    Id = Guid.NewGuid(),
                    Name = "Net Core Super Board",
                    Description =
                        "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Proin pharetra nonummy pede. Mauris et orci.",
                    Price = 30000,
                    PictureUrl = "/images/products/sb-core2.png",
                    Brand = "NetCore",
                    Type = "Boards",
                    QuantityInStock = 100
                },
                new Product
                {
                    Id = Guid.NewGuid(),
                    Name = "React Board Super Whizzy Fast",
                    Description =
                        "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas porttitor congue massa. Fusce posuere, magna sed pulvinar ultricies, purus lectus malesuada libero, sit amet commodo magna eros quis urna.",
                    Price = 25000,
                    PictureUrl = "/images/products/sb-react1.png",
                    Brand = "React",
                    Type = "Boards",
                    QuantityInStock = 100
                },
                new Product
                {
                    Id = Guid.NewGuid(),
                    Name = "Typescript Entry Board",
                    Description =
                        "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas porttitor congue massa. Fusce posuere, magna sed pulvinar ultricies, purus lectus malesuada libero, sit amet commodo magna eros quis urna.",
                    Price = 12000,
                    PictureUrl = "/images/products/sb-ts1.png",
                    Brand = "TypeScript",
                    Type = "Boards",
                    QuantityInStock = 100
                },
                new Product
                {
                    Id = Guid.NewGuid(),
                    Name = "Core Blue Hat",
                    Description =
                        "Fusce posuere, magna sed pulvinar ultricies, purus lectus malesuada libero, sit amet commodo magna eros quis urna.",
                    Price = 1000,
                    PictureUrl = "/images/products/hat-core1.png",
                    Brand = "NetCore",
                    Type = "Hats",
                    QuantityInStock = 100
                },
                new Product
                {
                    Id = Guid.NewGuid(),
                    Name = "Green React Woolen Hat",
                    Description =
                        "Fusce posuere, magna sed pulvinar ultricies, purus lectus malesuada libero, sit amet commodo magna eros quis urna.",
                    Price = 8000,
                    PictureUrl = "/images/products/hat-react1.png",
                    Brand = "React",
                    Type = "Hats",
                    QuantityInStock = 100
                },
                new Product
                {
                    Id = Guid.NewGuid(),
                    Name = "Purple React Woolen Hat",
                    Description =
                        "Fusce posuere, magna sed pulvinar ultricies, purus lectus malesuada libero, sit amet commodo magna eros quis urna.",
                    Price = 1500,
                    PictureUrl = "/images/products/hat-react2.png",
                    Brand = "React",
                    Type = "Hats",
                    QuantityInStock = 100
                },
                new Product
                {
                    Id = Guid.NewGuid(),
                    Name = "Blue Code Gloves",
                    Description =
                        "Fusce posuere, magna sed pulvinar ultricies, purus lectus malesuada libero, sit amet commodo magna eros quis urna.",
                    Price = 1800,
                    PictureUrl = "/images/products/glove-code1.png",
                    Brand = "VS Code",
                    Type = "Gloves",
                    QuantityInStock = 100
                },
                new Product
                {
                    Id = Guid.NewGuid(),
                    Name = "Green Code Gloves",
                    Description =
                        "Fusce posuere, magna sed pulvinar ultricies, purus lectus malesuada libero, sit amet commodo magna eros quis urna.",
                    Price = 1500,
                    PictureUrl = "/images/products/glove-code2.png",
                    Brand = "VS Code",
                    Type = "Gloves",
                    QuantityInStock = 100
                },
                new Product
                {
                    Id = Guid.NewGuid(),
                    Name = "Purple React Gloves",
                    Description =
                        "Fusce posuere, magna sed pulvinar ultricies, purus lectus malesuada libero, sit amet commodo magna eros quis urna.",
                    Price = 1600,
                    PictureUrl = "/images/products/glove-react1.png",
                    Brand = "React",
                    Type = "Gloves",
                    QuantityInStock = 100
                },
                new Product
                {
                    Id = Guid.NewGuid(),
                    Name = "Green React Gloves",
                    Description =
                        "Fusce posuere, magna sed pulvinar ultricies, purus lectus malesuada libero, sit amet commodo magna eros quis urna.",
                    Price = 1400,
                    PictureUrl = "/images/products/glove-react2.png",
                    Brand = "React",
                    Type = "Gloves",
                    QuantityInStock = 100
                },
                new Product
                {
                    Id = Guid.NewGuid(),
                    Name = "Redis Red Boots",
                    Description =
                        "Suspendisse dui purus, scelerisque at, vulputate vitae, pretium mattis, nunc. Mauris eget neque at sem venenatis eleifend. Ut nonummy.",
                    Price = 25000,
                    PictureUrl = "/images/products/boot-redis1.png",
                    Brand = "Redis",
                    Type = "Boots",
                    QuantityInStock = 100
                },
                new Product
                {
                    Id = Guid.NewGuid(),
                    Name = "Core Red Boots",
                    Description =
                        "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas porttitor congue massa. Fusce posuere, magna sed pulvinar ultricies, purus lectus malesuada libero, sit amet commodo magna eros quis urna.",
                    Price = 18999,
                    PictureUrl = "/images/products/boot-core2.png",
                    Brand = "NetCore",
                    Type = "Boots",
                    QuantityInStock = 100
                },
                new Product
                {
                    Id = Guid.NewGuid(),
                    Name = "Core Purple Boots",
                    Description =
                        "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Proin pharetra nonummy pede. Mauris et orci.",
                    Price = 19999,
                    PictureUrl = "/images/products/boot-core1.png",
                    Brand = "NetCore",
                    Type = "Boots",
                    QuantityInStock = 100
                },
                new Product
                {
                    Id = Guid.NewGuid(),
                    Name = "Angular Purple Boots",
                    Description = "Aenean nec lorem. In porttitor. Donec laoreet nonummy augue.",
                    Price = 15000,
                    PictureUrl = "/images/products/boot-ang2.png",
                    Brand = "Angular",
                    Type = "Boots",
                    QuantityInStock = 100
                },
                new Product
                {
                    Id = Guid.NewGuid(),
                    Name = "Angular Blue Boots",
                    Description =
                        "Suspendisse dui purus, scelerisque at, vulputate vitae, pretium mattis, nunc. Mauris eget neque at sem venenatis eleifend. Ut nonummy.",
                    Price = 18000,
                    PictureUrl = "/images/products/boot-ang1.png",
                    Brand = "Angular",
                    Type = "Boots",
                    QuantityInStock = 100
                },
            };

            context.Products.AddRange(products);
            context.SaveChanges();
        }
    }
}
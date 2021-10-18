#See https://aka.ms/containerfastmode to understand how Visual Studio uses this Dockerfile to build your images for faster debugging.

FROM mcr.microsoft.com/dotnet/aspnet:5.0 AS base
WORKDIR /app
EXPOSE 80
EXPOSE 443

FROM mcr.microsoft.com/dotnet/sdk:5.0 AS build
WORKDIR /src
COPY ["AdventureWorks.OData.API/AdventureWorks.OData.API.csproj", "AdventureWorks.OData.API/"]
RUN dotnet restore "AdventureWorks.OData.API/AdventureWorks.OData.API.csproj"
COPY . .
WORKDIR "/src/AdventureWorks.OData.API"
RUN dotnet build "AdventureWorks.OData.API.csproj" -c Release -o /app/build

FROM build AS publish
RUN dotnet publish "AdventureWorks.OData.API.csproj" -c Release -o /app/publish

FROM base AS final
WORKDIR /app
COPY --from=publish /app/publish .
ENTRYPOINT ["dotnet", "AdventureWorks.OData.API.dll"]
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status

from .models import User, Excursion, ExcursionOrder
from .serializers import UserSerializer, ExcursionSerializer, ExcursionOrderSerializer

class UserView(APIView):
    def get(self, request):
        users = User.objects.all()
        serializer = UserSerializer(users, many=True)
        return Response(serializer.data)
    
    def post(selt, request):
        serializer = UserSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class ExcursionView(APIView):
    def get(selt, request):
        excursions =  Excursion.objects.all()
        serializer = ExcursionSerializer(excursions, many=True)
        return Response(serializer.data)

class ExcursionOrderView(APIView):
    def get(self, request):
        orders = ExcursionOrder.objects.all()
        serializer = ExcursionOrderSerializer(orders, many=True)
        return Response(serializer.data)
    
    def post(self, request):
        serializer = ExcursionOrderSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
    # def delete(self, request, )
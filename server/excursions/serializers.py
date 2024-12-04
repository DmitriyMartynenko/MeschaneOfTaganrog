from rest_framework.serializers import ModelSerializer

from .models import User, Excursion, ExcursionOrder

class UserSerializer(ModelSerializer):
    class Meta:
        model = User
        fields = '__all__'

class ExcursionSerializer(ModelSerializer):
    class Meta:
        model = Excursion
        fields = '__all__'

class ExcursionOrderSerializer(ModelSerializer):
    class Meta:
        model = ExcursionOrder
        fields = '__all__'
        
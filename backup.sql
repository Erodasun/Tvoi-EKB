PGDMP     	    .                |            interesting_places_db    15.2    15.2     �           0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                      false            �           0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                      false            �           0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                      false            �           1262    27560    interesting_places_db    DATABASE     �   CREATE DATABASE interesting_places_db WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE_PROVIDER = libc LOCALE = 'Russian_Russia.1251';
 %   DROP DATABASE interesting_places_db;
                postgres    false            �            1259    27562    reviews    TABLE     �   CREATE TABLE public.reviews (
    id integer NOT NULL,
    place_title character varying(255) NOT NULL,
    author character varying(255) NOT NULL,
    text text NOT NULL
);
    DROP TABLE public.reviews;
       public         heap    postgres    false            �            1259    27561    reviews_id_seq    SEQUENCE     �   CREATE SEQUENCE public.reviews_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 %   DROP SEQUENCE public.reviews_id_seq;
       public          postgres    false    215            �           0    0    reviews_id_seq    SEQUENCE OWNED BY     A   ALTER SEQUENCE public.reviews_id_seq OWNED BY public.reviews.id;
          public          postgres    false    214            e           2604    27565 
   reviews id    DEFAULT     h   ALTER TABLE ONLY public.reviews ALTER COLUMN id SET DEFAULT nextval('public.reviews_id_seq'::regclass);
 9   ALTER TABLE public.reviews ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    214    215    215            �          0    27562    reviews 
   TABLE DATA           @   COPY public.reviews (id, place_title, author, text) FROM stdin;
    public          postgres    false    215   �
       �           0    0    reviews_id_seq    SEQUENCE SET     <   SELECT pg_catalog.setval('public.reviews_id_seq', 7, true);
          public          postgres    false    214            g           2606    27569    reviews reviews_pkey 
   CONSTRAINT     R   ALTER TABLE ONLY public.reviews
    ADD CONSTRAINT reviews_pkey PRIMARY KEY (id);
 >   ALTER TABLE ONLY public.reviews DROP CONSTRAINT reviews_pkey;
       public            postgres    false    215            �   }  x��RIn�@<ϼb�G#e�Lc��@@�%B	���Y,����zLd)��d��4x�jl��������J�(5�\�ԡB*1����̜<1q�����E��D2S�R�2q�4<D�a5�N.#)
�*-�^2����k,Y�r|U�a����>����Cc0'�Fb�nU��Z��U\[*�g���@a\b>�U2�;���D��~��P�9ʬ����d��F�^��3�`ZA�����[Z|hE2j傐��!�2z?!Jz��3`��P�ޝǺPV�W"��D4�?ʵQ�vJ�N]u*G����y��-�.%st���B�4t1x���t��4�R���������P�Ɨ2e�\O6��v�I��� p���>xk�]%�d     